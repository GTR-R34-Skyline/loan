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
    <section id="impact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            MEASURABLE IMPACT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Financial Access
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from our AI-powered credit assessment platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${metric.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-lg font-semibold mb-2 text-gray-200">{metric.label}</div>
              <div className="text-sm text-gray-400 leading-relaxed">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Leading Organizations</h3>
            <p className="text-gray-300">Partnering with institutions committed to financial inclusion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">NBCFDC</div>
              <div className="text-xs text-gray-400">Government Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Microfinance</div>
              <div className="text-xs text-gray-400">Network Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Social Finance</div>
              <div className="text-xs text-gray-400">Impact Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Banking Corp</div>
              <div className="text-xs text-gray-400">Technology Partner</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold mb-2 text-teal-400">100%</div>
            <div className="text-sm text-gray-300">Explainable AI - every decision is transparent and auditable</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold mb-2 text-blue-400">Secure</div>
            <div className="text-sm text-gray-300">Bank-grade encryption and compliance with data privacy regulations</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold mb-2 text-cyan-400">24/7</div>
            <div className="text-sm text-gray-300">Real-time scoring API available round-the-clock for instant decisions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
