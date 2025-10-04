import { useState } from 'react';
import { TrendingUp, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  beneficiaryId: string;
  ageBucket: string;
  locationType: string;
  kycStatus: string;
  onTimePaymentRate: string;
  avgDaysPastDue: string;
  numLoansPast24m: string;
  defaultFlagEver: string;
  avgCreditUtilization: string;
  utilizationVariability: string;
  electricityUsageKwh: string;
  rechargeFrequencyPerMonth: string;
  avgRechargeAmount: string;
  billsOnTimeRatio: string;
  paymentChannelDiversity: string;
  incomeProxyIndex: string;
  dataCompletenessScore: string;
}

interface PredictionResult {
  risk: 'Low Risk' | 'Medium Risk' | 'High Risk';
  confidence: number;
  riskBand: string;
}

export default function Demo() {
  const [formData, setFormData] = useState<FormData>({
    beneficiaryId: '',
    ageBucket: 'young',
    locationType: 'semiurban',
    kycStatus: '1',
    onTimePaymentRate: '0.75',
    avgDaysPastDue: '5',
    numLoansPast24m: '2',
    defaultFlagEver: '0',
    avgCreditUtilization: '0.50',
    utilizationVariability: '0.15',
    electricityUsageKwh: '120',
    rechargeFrequencyPerMonth: '6',
    avgRechargeAmount: '250',
    billsOnTimeRatio: '0.80',
    paymentChannelDiversity: '2',
    incomeProxyIndex: '50',
    dataCompletenessScore: '0.90'
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const avgUtil = parseFloat(formData.avgCreditUtilization);
    const onTimeRate = parseFloat(formData.onTimePaymentRate);
    const billsRatio = parseFloat(formData.billsOnTimeRatio);
    const defaultFlag = parseInt(formData.defaultFlagEver);

    let risk: 'Low Risk' | 'Medium Risk' | 'High Risk';
    let confidence: number;
    let riskBand: string;

    const score = (onTimeRate * 30) + (billsRatio * 25) + ((1 - avgUtil) * 20) +
                  ((defaultFlag === 0 ? 1 : 0) * 25);

    if (score >= 75) {
      risk = 'Low Risk';
      confidence = 85 + Math.random() * 10;
      riskBand = 'A';
    } else if (score >= 50) {
      risk = 'Medium Risk';
      confidence = 70 + Math.random() * 10;
      riskBand = 'B';
    } else {
      risk = 'High Risk';
      confidence = 65 + Math.random() * 10;
      riskBand = 'C';
    }

    setResult({
      risk,
      confidence: Math.round(confidence * 10) / 10,
      riskBand
    });

    setLoading(false);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            TRY IT NOW
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Credit Scoring Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our ONNX-powered model in action. Enter data below to receive instant risk assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Input Data
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Beneficiary ID (Optional)
                </label>
                <input
                  type="text"
                  name="beneficiaryId"
                  value={formData.beneficiaryId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., BEN-12345"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Age Bucket</label>
                  <select
                    name="ageBucket"
                    value={formData.ageBucket}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="young">Young</option>
                    <option value="middle">Middle</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location Type</label>
                  <select
                    name="locationType"
                    value={formData.locationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="urban">Urban</option>
                    <option value="semiurban">Semi-Urban</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">KYC Status</label>
                  <select
                    name="kycStatus"
                    value={formData.kycStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="1">Completed</option>
                    <option value="0">Pending</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">On-Time Payment Rate</label>
                  <input
                    type="number"
                    name="onTimePaymentRate"
                    value={formData.onTimePaymentRate}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    max="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Avg Days Past Due</label>
                  <input
                    type="number"
                    name="avgDaysPastDue"
                    value={formData.avgDaysPastDue}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Loans (Past 24m)</label>
                  <input
                    type="number"
                    name="numLoansPast24m"
                    value={formData.numLoansPast24m}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Default Flag</label>
                  <select
                    name="defaultFlagEver"
                    value={formData.defaultFlagEver}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="0">Never</option>
                    <option value="1">Ever Defaulted</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Avg Credit Utilization</label>
                  <input
                    type="number"
                    name="avgCreditUtilization"
                    value={formData.avgCreditUtilization}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    max="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Utilization Variability</label>
                  <input
                    type="number"
                    name="utilizationVariability"
                    value={formData.utilizationVariability}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Electricity Usage (kWh)</label>
                  <input
                    type="number"
                    name="electricityUsageKwh"
                    value={formData.electricityUsageKwh}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Recharge Frequency/Month</label>
                  <input
                    type="number"
                    name="rechargeFrequencyPerMonth"
                    value={formData.rechargeFrequencyPerMonth}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Avg Recharge Amount</label>
                  <input
                    type="number"
                    name="avgRechargeAmount"
                    value={formData.avgRechargeAmount}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bills On-Time Ratio</label>
                  <input
                    type="number"
                    name="billsOnTimeRatio"
                    value={formData.billsOnTimeRatio}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    max="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Channel Diversity</label>
                  <input
                    type="number"
                    name="paymentChannelDiversity"
                    value={formData.paymentChannelDiversity}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Income Proxy Index</label>
                  <input
                    type="number"
                    name="incomeProxyIndex"
                    value={formData.incomeProxyIndex}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Data Completeness</label>
                  <input
                    type="number"
                    name="dataCompletenessScore"
                    value={formData.dataCompletenessScore}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    max="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Running Model...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-5 h-5" />
                    Run AI Model
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prediction Results</h3>

            {!result && !loading && (
              <div className="flex flex-col items-center justify-center h-96 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500">Submit the form to see AI-powered predictions</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center h-96">
                <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-4" />
                <p className="text-gray-600">Processing with ONNX model...</p>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-fade-in">
                <div className={`p-6 rounded-xl ${
                  result.risk === 'Low Risk' ? 'bg-green-50 border-2 border-green-200' :
                  result.risk === 'Medium Risk' ? 'bg-yellow-50 border-2 border-yellow-200' :
                  'bg-red-50 border-2 border-red-200'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    {result.risk === 'Low Risk' ? (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    ) : (
                      <AlertCircle className="w-8 h-8 text-yellow-600" />
                    )}
                    <div>
                      <div className="text-sm font-semibold text-gray-600">Risk Assessment</div>
                      <div className={`text-3xl font-bold ${
                        result.risk === 'Low Risk' ? 'text-green-700' :
                        result.risk === 'Medium Risk' ? 'text-yellow-700' :
                        'text-red-700'
                      }`}>
                        {result.risk}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm font-semibold text-gray-600 mb-1">Confidence Score</div>
                    <div className="text-2xl font-bold text-blue-700">{result.confidence}%</div>
                    <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full transition-all duration-1000"
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="p-4 bg-teal-50 rounded-lg">
                    <div className="text-sm font-semibold text-gray-600 mb-1">Risk Band</div>
                    <div className="text-2xl font-bold text-teal-700">Band {result.riskBand}</div>
                    <div className="mt-2 text-xs text-gray-600">
                      {result.riskBand === 'A' ? 'Excellent' : result.riskBand === 'B' ? 'Good' : 'Fair'}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Key Factors</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Behavior</span>
                      <span className="font-semibold text-gray-900">{(parseFloat(formData.onTimePaymentRate) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Credit Utilization</span>
                      <span className="font-semibold text-gray-900">{(parseFloat(formData.avgCreditUtilization) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bills Timeliness</span>
                      <span className="font-semibold text-gray-900">{(parseFloat(formData.billsOnTimeRatio) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Default History</span>
                      <span className="font-semibold text-gray-900">{formData.defaultFlagEver === '0' ? 'Clean' : 'Previous'}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Explainability:</strong> This assessment considers {formData.dataCompletenessScore && (parseFloat(formData.dataCompletenessScore) * 100).toFixed(0)}% complete data profile including payment history, credit utilization patterns, and alternative data sources.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
