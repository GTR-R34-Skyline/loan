import { Brain, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="card-gradient-black text-white py-16 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4E7C3] rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-[#D4AF37] tracking-wide">X-AIN</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6 font-light">
              Explainable AI Credit & Need Assessment Platform for inclusive lending.
              Making financial access fair, transparent, and data-driven.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-[#D4AF37] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-[#D4AF37] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-[#D4AF37] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4AF37] tracking-wide">Platform</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('use-cases')} className="text-gray-400 hover:text-white transition-colors">
                  Use Cases
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('demo')} className="text-gray-400 hover:text-white transition-colors">
                  Try Demo
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('impact')} className="text-gray-400 hover:text-white transition-colors">
                  Impact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4AF37] tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} X-AIN. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Built with transparency, powered by AI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
