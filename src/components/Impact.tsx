import { TrendingUp, Users, Clock, Target } from 'lucide-react';

export default function Impact() {
  const metrics = [
    {
      icon: Clock,
      value: '50%',
      label: 'Faster Loan Decisions',
      description: 'AI-powered processing reduces approval time from days to minutes',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      value: '30%',
      label: 'Better Risk Segmentation',
      description: 'Advanced modeling improves accuracy in identifying creditworthy borrowers',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      value: '1,000+',
      label: 'Users Served',
      description: 'Expanding financial inclusion across underserved communities',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Model Accuracy',
      description: 'Consistently reliable predictions with explainable outcomes',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-neutral-50 via-stone-50 to-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(212, 175, 55, 0.2) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 card-gradient-black border border-[#D4AF37]/30 rounded-full text-sm font-semibold mb-4 shadow-amex tracking-wider">
            <span className="text-gradient-gold">MEASURABLE IMPACT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Transforming Financial Access
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Real results from our AI-powered credit assessment platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative card-gradient-black rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 shadow-amex hover:shadow-amex-hover transition-all duration-500 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E7C3] rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="w-6 h-6 text-black" />
              </div>
              <div className="text-4xl font-bold mb-2 text-[#D4AF37]">{metric.value}</div>
              <div className="text-lg font-semibold mb-2 text-gray-200 tracking-wide">{metric.label}</div>
              <div className="text-sm text-gray-400 leading-relaxed font-light">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 card-gradient-black rounded-2xl p-8 border border-[#D4AF37]/20 shadow-amex">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#D4AF37]">Trusted by Leading Organizations</h3>
            <p className="text-gray-300 font-light">Partnering with institutions committed to financial inclusion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37] mb-1">NBCFDC</div>
              <div className="text-xs text-gray-400 tracking-wide">Government Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37] mb-1">Microfinance</div>
              <div className="text-xs text-gray-400 tracking-wide">Network Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37] mb-1">Social Finance</div>
              <div className="text-xs text-gray-400 tracking-wide">Impact Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37] mb-1">Banking Corp</div>
              <div className="text-xs text-gray-400 tracking-wide">Technology Partner</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card-gradient-black rounded-xl p-6 border border-[#D4AF37]/20 shadow-amex hover:shadow-amex-hover transition-all duration-500">
            <div className="text-3xl font-bold mb-2 text-[#D4AF37]">100%</div>
            <div className="text-sm text-gray-300 font-light">Explainable AI - every decision is transparent and auditable</div>
          </div>
          <div className="card-gradient-black rounded-xl p-6 border border-[#D4AF37]/20 shadow-amex hover:shadow-amex-hover transition-all duration-500">
            <div className="text-3xl font-bold mb-2 text-[#D4AF37]">Secure</div>
            <div className="text-sm text-gray-300 font-light">Bank-grade encryption and compliance with data privacy regulations</div>
          </div>
          <div className="card-gradient-black rounded-xl p-6 border border-[#D4AF37]/20 shadow-amex hover:shadow-amex-hover transition-all duration-500">
            <div className="text-3xl font-bold mb-2 text-[#D4AF37]">24/7</div>
            <div className="text-sm text-gray-300 font-light">Real-time scoring API available round-the-clock for instant decisions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
