# ONNX Model Placement

Place your `xain_model.onnx` file in this directory.

## Integration Steps:

1. **Add your ONNX model here:**
   ```
   /public/models/xain_model.onnx
   ```

2. **Install ONNX Runtime:**
   ```bash
   npm install onnxruntime-web
   ```

3. **Update the inference utility:**
   - Edit `src/utils/onnxInference.ts`
   - Import ONNX Runtime Web
   - Load the model from `/models/xain_model.onnx`
   - Replace the mock prediction logic with actual inference

4. **Example code to load and run the model:**
   ```typescript
   import * as ort from 'onnxruntime-web';

   let session: ort.InferenceSession | null = null;

   export async function loadModel() {
     if (!session) {
       session = await ort.InferenceSession.create('/models/xain_model.onnx');
     }
     return session;
   }

   export async function runONNXModel(input: ModelInput): Promise<ModelOutput> {
     const session = await loadModel();

     // Prepare input tensor (adjust shape based on your model)
     const inputTensor = new ort.Tensor('float32', features, [1, features.length]);

     // Run inference
     const results = await session.run({ input: inputTensor });

     // Process output
     const output = results.output.data as Float32Array;

     return {
       prediction: output[0],
       confidence: output[1]
     };
   }
   ```

## Model Input Features (17 total):

1. age_bucket (encoded: young=0, middle=1, senior=2)
2. location_type (encoded: urban=0, semiurban=1, rural=2)
3. kyc_status (0 or 1)
4. on_time_payment_rate (0.0 to 1.0)
5. avg_days_past_due (numeric)
6. num_loans_past_24m (integer)
7. default_flag_ever (0 or 1)
8. avg_credit_utilization (0.0 to 1.0)
9. utilization_variability (numeric)
10. electricity_usage_kwh (numeric)
11. recharge_frequency_per_month (numeric)
12. avg_recharge_amount (numeric)
13. bills_on_time_ratio (0.0 to 1.0)
14. payment_channel_diversity (integer)
15. income_proxy_index (numeric)
16. data_completeness_score (0.0 to 1.0)

## Expected Output:

Your model should output:
- Prediction class (0=Low Risk, 1=Medium Risk, 2=High Risk)
- Confidence score (0.0 to 1.0 or 0 to 100)
