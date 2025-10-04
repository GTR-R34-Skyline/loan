import { Target, Users, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transforming Credit Assessment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            X-AIN leverages advanced AI to make credit assessment fair, transparent, and explainable,
            enabling financial inclusion for underserved communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'Democratize access to credit through transparent AI-powered risk assessment that considers alternative data sources.'
            },
            {
              icon: Users,
              title: 'Our Approach',
              description: 'Combine traditional credit metrics with consumption patterns, payment behaviors, and proxy income indicators.'
            },
            {
              icon: Shield,
              title: 'Our Promise',
              description: 'Every decision is explainable, auditable, and designed to promote fair lending practices across all demographics.'
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">How X-AIN Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Data Collection', desc: 'Gather multi-dimensional data points' },
                { step: '02', title: 'AI Processing', desc: 'ONNX model analyzes patterns' },
                { step: '03', title: 'Risk Assessment', desc: 'Generate explainable scores' },
                { step: '04', title: 'Decision Support', desc: 'Provide actionable insights' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-3">{item.step}</div>
                  <div className="text-lg font-semibold mb-2">{item.title}</div>
                  <div className="text-sm text-gray-300">{item.desc}</div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-500/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
