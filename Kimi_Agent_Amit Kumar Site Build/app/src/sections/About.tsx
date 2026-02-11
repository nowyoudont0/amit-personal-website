import { ScrollReveal } from '@/components/ScrollReveal';
import { CountUp } from '@/components/CountUp';

export function About() {
  const stats = [
    { value: 2, prefix: '$', suffix: 'Bn+', label: 'Deal Value Managed' },
    { value: 2, suffix: '+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/images/amit-headshot.jpg"
                  alt="Amit Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-navy-800/5 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-navy-800/10 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold text-navy-800 tracking-wider uppercase mb-4">
                About Me
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Driving Strategic Growth Through{' '}
                <span className="text-navy-800">M&A Excellence</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  I'm an Investment and M&A professional currently serving as Associate Manager 
                  at Adani Enterprises' Group CFO Office. With expertise in financial modeling, 
                  valuation, and transaction execution, I've contributed to deals worth over $2 billion.
                </p>
                <p>
                  My journey includes graduating from IIM Calcutta, earning FMVA® and CFA Level 1 
                  certifications, and co-founding Stuffin - a startup that achieved profitability 
                  and received government funding.
                </p>
                <p>
                  Beyond finance, I'm a national-level hockey player and former captain of IIM 
                  Calcutta's hockey team, bringing the same discipline and teamwork to my 
                  professional endeavors.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100 max-w-md">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-navy-800">
                      <CountUp
                        end={stat.value}
                        prefix={stat.prefix || ''}
                        suffix={stat.suffix}
                        duration={2000}
                        delay={index * 200}
                      />
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
