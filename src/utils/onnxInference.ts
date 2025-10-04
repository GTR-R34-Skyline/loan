import * as ort from 'onnxruntime-web';

export interface ModelInput {
  ageBucket: string;
  locationType: string;
  kycStatus: number;
  onTimePaymentRate: number;
  avgDaysPastDue: number;
  numLoansPast24m: number;
  defaultFlagEver: number;
  avgCreditUtilization: number;
  utilizationVariability: number;
  electricityUsageKwh: number;
  rechargeFrequencyPerMonth: number;
  avgRechargeAmount: number;
  billsOnTimeRatio: number;
  paymentChannelDiversity: number;
  incomeProxyIndex: number;
  dataCompletenessScore: number;
}

export interface ModelOutput {
  prediction: number;
  confidence: number;
}

let sessionCache: ort.InferenceSession | null = null;

async function getSession(): Promise<ort.InferenceSession> {
  if (!sessionCache) {
    sessionCache = await ort.InferenceSession.create('/models/xain_model.onnx', {
      executionProviders: ['wasm'],
      graphOptimizationLevel: 'all'
    });
  }
  return sessionCache;
}

export async function runONNXModel(input: ModelInput): Promise<ModelOutput> {
  try {
    const session = await getSession();
    
    // Prepare input features array
    const features = [
      input.ageBucket === 'young' ? 0 : input.ageBucket === 'middle' ? 1 : 2,
      input.locationType === 'urban' ? 0 : input.locationType === 'semiurban' ? 1 : 2,
      input.kycStatus,
      input.onTimePaymentRate,
      input.avgDaysPastDue,
      input.numLoansPast24m,
      input.defaultFlagEver,
      input.avgCreditUtilization,
      input.utilizationVariability,
      input.electricityUsageKwh,
      input.rechargeFrequencyPerMonth,
      input.avgRechargeAmount,
      input.billsOnTimeRatio,
      input.paymentChannelDiversity,
      input.incomeProxyIndex,
      input.dataCompletenessScore
    ];

    // Create ONNX tensor from input features
    const tensor = new ort.Tensor('float32', new Float32Array(features), [1, 16]);
    
    // Run inference
    const feeds: Record<string, ort.Tensor> = { input: tensor };
    const results = await session.run(feeds);

    // Get prediction probabilities from output
    const outputData = results.output.data as Float32Array;
    const prediction = Array.from(outputData).indexOf(Math.max(...outputData));
    const confidence = Math.max(...outputData);

    return {
      prediction,
      confidence
    };

  } catch (error) {
    console.error('ONNX inference failed:', error);
    throw new Error(`ONNX inference failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}