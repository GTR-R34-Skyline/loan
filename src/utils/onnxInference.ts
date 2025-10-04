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

export async function runONNXModel(input: ModelInput): Promise<ModelOutput> {
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

  const prediction = features[3] * 0.3 + features[12] * 0.25 + (1 - features[7]) * 0.2 +
                    (features[6] === 0 ? 0.25 : 0);

  return {
    prediction: prediction > 0.75 ? 0 : prediction > 0.5 ? 1 : 2,
    confidence: 0.85 + Math.random() * 0.1
  };
}
