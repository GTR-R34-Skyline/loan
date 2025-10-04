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
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold mb-4">
            WHO WE SERVE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Financial Inclusion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            X-AIN serves diverse organizations committed to expanding access to fair credit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
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
