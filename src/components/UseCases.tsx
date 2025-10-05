import { Building2, HandCoins, Users as Users2, Landmark } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: Landmark,
      title: 'Government Lending Programs',
      description: 'Enable public sector institutions to assess beneficiaries fairly and distribute credit efficiently.',
      benefits: ['Reduced processing time', 'Improved targeting', 'Transparent allocation']
    },
    {
      icon: HandCoins,
      title: 'Microfinance Institutions',
      description: 'Empower MFIs to serve underbanked populations with data-driven risk assessment.',
      benefits: ['Lower default rates', 'Portfolio optimization', 'Scale operations']
    },
    {
      icon: Users2,
      title: 'Channel Partners',
      description: 'Integrate X-AIN into existing platforms to offer enhanced credit decisioning capabilities.',
      benefits: ['API-first design', 'White-label options', 'Real-time scoring']
    },
    {
      icon: Building2,
      title: 'Social Finance Organizations',
      description: 'Support impact-driven lenders with tools that prioritize inclusion and fairness.',
      benefits: ['Explainable decisions', 'Bias detection', 'Impact reporting']
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 card-gradient-black border border-[#D4AF37]/30 rounded-full text-sm font-semibold mb-4 tracking-wider shadow-amex">
            <span className="text-gradient-gold">WHO WE SERVE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Financial Inclusion
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            X-AIN serves diverse organizations committed to expanding access to fair credit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative card-gradient-black rounded-2xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 shadow-amex hover:shadow-amex-hover transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E7C3] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <useCase.icon className="w-8 h-8 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-3 tracking-wide">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed font-light">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
