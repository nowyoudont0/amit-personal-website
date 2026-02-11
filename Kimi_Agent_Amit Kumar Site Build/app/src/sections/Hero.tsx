import { useState, useEffect } from 'react';
import { WaveBackground } from '@/components/WaveBackground';
import { TypeWriter } from '@/components/TypeWriter';
import { ArrowDown, Briefcase, Mail } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <WaveBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        <div className="py-20 md:py-32">
          {/* Greeting */}
          <div
            className={`transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-white/70 text-lg md:text-xl font-light mb-4">
              Hello, I'm
            </p>
          </div>

          {/* Name with typing animation */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TypeWriter
              texts={['Amit Kumar.']}
              typingSpeed={100}
              showCursor={true}
            />
          </h1>

          {/* Title with typing animation */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 mb-6">
              <TypeWriter
                texts={['Investment & M&A Professional']}
                typingSpeed={80}
                showCursor={true}
              />
            </h2>
          </div>

          {/* Subtitle */}
          <p
            className={`text-white/60 text-base md:text-lg max-w-2xl mb-10 transition-all duration-700 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Associate Manager at Adani Enterprises | FMVA® | IIM Calcutta
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => scrollToSection('#experience')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <Briefcase size={20} />
              View My Experience
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <Mail size={20} />
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
