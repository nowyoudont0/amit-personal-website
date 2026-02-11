import { ScrollReveal } from '@/components/ScrollReveal';
import { Mail, Phone, MapPin, Linkedin, ArrowUp, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'amitsingh4418216@gmail.com',
    href: 'mailto:amitsingh4418216@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 62326 66840',
    href: 'tel:+916232666840',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Ahmedabad / Mumbai, India',
    href: '#',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/amit-kumar333/',
  },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Sports', href: '#sports' },
];

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer id="contact" className="bg-navy-900">
      {/* Contact CTA Section */}
      <div className="section-padding border-b border-white/10">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold text-white/60 tracking-wider uppercase mb-4">
                Get in Touch
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Let's <span className="text-white/80">Connect</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-white/60 max-w-xl mx-auto">
                Happy to chat about business ideas, collaborations, or opportunities in the finance and startup space.
              </p>
            </ScrollReveal>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <ScrollReveal key={item.label} delay={300 + index * 100}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm text-white/50 mb-1">{item.label}</span>
                  <span className="text-white font-medium flex items-center gap-2">
                    {item.value}
                    {item.href.startsWith('http') && (
                      <ExternalLink size={14} className="opacity-50" />
                    )}
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>


        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold text-white hover:text-white/80 transition-colors"
            >
              AK.
            </a>

            {/* Quick Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 group"
            >
              Back to top
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowUp size={16} />
              </span>
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Amit Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
