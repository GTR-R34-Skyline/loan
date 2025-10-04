import { Brain, Zap, BarChart3, Shield, Database, Layers } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Explainable AI Models',
      description: 'Every credit decision comes with clear reasoning and feature importance rankings, ensuring transparency and auditability.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Real-Time Credit Scoring',
      description: 'ONNX-powered inference delivers instant risk assessments with confidence scores and band classifications.',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Income & Consumption Insights',
      description: 'Analyze electricity usage, recharge patterns, and payment behaviors to build comprehensive financial profiles.',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Risk Band Classification',
      description: 'Categorize applicants into Low, Medium, and High risk bands with detailed scoring breakdowns.',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Database,
      title: 'Alternative Data Integration',
      description: 'Go beyond traditional credit bureaus with utility payments, mobile recharge, and behavioral data.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Layers,
      title: 'Dashboard & API Access',
      description: 'Seamless integration with existing systems through RESTful APIs and comprehensive admin dashboards.',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            PLATFORM FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Tools for Fair Lending
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI capabilities designed to make credit accessible, transparent, and equitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
