import { Brain, Zap, BarChart3, Shield, Database, Layers } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Explainable AI Models',
      description: 'Every credit decision comes with clear reasoning and feature importance rankings, ensuring transparency and auditability.',
      animation: 'animate-tilt'
    },
    {
      icon: Zap,
      title: 'Real-Time Credit Scoring',
      description: 'ONNX-powered inference delivers instant risk assessments with confidence scores and band classifications.',
      animation: 'animate-float'
    },
    {
      icon: BarChart3,
      title: 'Income & Consumption Insights',
      description: 'Analyze electricity usage, recharge patterns, and payment behaviors to build comprehensive financial profiles.',
      animation: 'hover:animate-scale-pulse'
    },
    {
      icon: Shield,
      title: 'Risk Band Classification',
      description: 'Categorize applicants into Low, Medium, and High risk bands with detailed scoring breakdowns.',
      animation: 'animate-slide-left'
    },
    {
      icon: Database,
      title: 'Alternative Data Integration',
      description: 'Go beyond traditional credit bureaus with utility payments, mobile recharge, and behavioral data.',
      animation: 'hover:animate-shimmer'
    },
    {
      icon: Layers,
      title: 'Dashboard & API Access',
      description: 'Seamless integration with existing systems through RESTful APIs and comprehensive admin dashboards.',
      animation: 'hover:animate-float'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-neutral-50 via-stone-50 to-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 card-gradient-black text-gradient-gold rounded-full text-sm font-semibold mb-4 tracking-wider">
            PLATFORM FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Tools for Fair Lending
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Advanced AI capabilities designed to make credit accessible, transparent, and equitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group card-gradient-black rounded-xl p-8 shadow-amex hover:shadow-amex-hover transition-all duration-500 hover:-translate-y-2 border border-[#D4AF37]/20 overflow-hidden relative ${feature.animation}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E7C3] rounded-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light">{feature.description}</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -translate-y-16 translate-x-16"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
