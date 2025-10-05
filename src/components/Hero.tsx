import { Brain, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(212, 175, 55, 0.2) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#F4E7C3] rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 card-gradient-black border border-[#D4AF37]/30 rounded-full mb-8 animate-fade-in shadow-amex">
          <Brain className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm text-gradient-gold font-medium tracking-wider">AI-POWERED CREDIT INTELLIGENCE</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Smart, Transparent Credit<br />
          <span className="text-gradient-gold">
            for Inclusive Lending
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 font-light">
          AI-driven credit and need assessment for fair financial inclusion.
          Transparent, explainable, and data-driven decisions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <button
            onClick={scrollToDemo}
            className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E7C3] hover:from-[#F4E7C3] hover:to-[#D4AF37] text-black font-semibold rounded-lg shadow-amex hover:shadow-amex-hover transition-all duration-500 hover:scale-105 flex items-center gap-2 tracking-wide"
          >
            <TrendingUp className="w-5 h-5" />
            Try AI Scoring
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-black/50 hover:bg-black/70 text-[#D4AF37] font-semibold rounded-lg border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 backdrop-blur-sm transition-all duration-500 tracking-wide"
          >
            Book a Demo
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: '50%', label: 'Faster Decisions' },
            { value: '30%', label: 'Better Risk Segmentation' },
            { value: '1,000+', label: 'Users Served' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up p-6 card-gradient-black rounded-xl border border-[#D4AF37]/20 shadow-amex hover:shadow-amex-hover transition-all duration-500" style={{ animationDelay: `${600 + index * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">{stat.value}</div>
              <div className="text-gray-300 font-light tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
