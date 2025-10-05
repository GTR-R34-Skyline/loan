import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 card-gradient-black border border-[#D4AF37]/30 rounded-full text-sm font-semibold mb-4 tracking-wider shadow-amex">
            <span className="text-gradient-gold">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Lending?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Contact us to learn more about X-AIN or schedule a personalized demo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="card-gradient-black rounded-2xl p-8 text-white mb-8 border border-[#D4AF37]/20 shadow-amex">
            <h3 className="text-2xl font-bold mb-6 text-[#D4AF37] tracking-wide">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E7C3] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-gray-300">contact@xain.ai</div>
                  <div className="text-gray-300">support@xain.ai</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E7C3] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <div className="text-gray-300">+91 (800) 123-4567</div>
                  <div className="text-gray-300">Mon-Fri 9am-6pm IST</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E7C3] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Office</div>
                  <div className="text-gray-300">
                    Financial District<br />
                    Bangalore, Karnataka<br />
                    India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose X-AIN */}
          <div className="card-gradient-black rounded-2xl p-8 shadow-amex border border-[#D4AF37]/20">
            <h4 className="text-xl font-bold text-[#D4AF37] mb-4 tracking-wide">Why Choose X-AIN?</h4>
            <ul className="space-y-3">
              {[
                'AI-powered credit scoring with 95% accuracy',
                'Complete transparency and explainability',
                'Real-time API integration',
                'Proven track record with 1,000+ users',
                'Compliant with data privacy regulations',
                'Dedicated support and training'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
