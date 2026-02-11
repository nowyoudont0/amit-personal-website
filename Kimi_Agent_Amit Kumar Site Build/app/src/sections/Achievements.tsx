import { ScrollReveal } from '@/components/ScrollReveal';
import { CountUp } from '@/components/CountUp';
import { Target, Flag, Award, Star } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface AchievementCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const stats: StatItem[] = [
  { value: 99, suffix: '.3%', label: 'DU JAT Percentile' },
  { value: 99, suffix: '.29%', label: 'IPMAT Percentile' },
  { value: 97, suffix: '.3%', label: 'NDA Written Exam' },
];

const achievementCategories: AchievementCategory[] = [
  {
    title: 'National Recognitions',
    icon: <Flag size={24} />,
    items: [
      "NCC 'A' Certificate (Army Wing)",
      '10+ parade competitions participation',
      '20+ campaign drives (NCC, 2011-17)',
      'Selected for naval aviation study at INS Vikramaditya (2016)',
    ],
  },
  {
    title: 'Competitive Examinations',
    icon: <Target size={24} />,
    items: [
      'AIR 174/24K+ in DU JAT (99.3%ile)',
      'AIR 8576/58K+ in CLAT',
      'AIR 125/17K+ in IPMAT (99.29%ile)',
      'Cleared NDA written examination (97.3%ile)',
    ],
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-white/60 tracking-wider uppercase mb-4">
              Achievements
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Built on{' '}
              <span className="text-white/80">Strong Foundations</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Stats Row */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                    delay={index * 200}
                  />
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Achievement Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={300 + index * 100}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <Star
                        size={18}
                        className="text-white/40 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Badges */}
        <ScrollReveal delay={500}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['FMVA® Certified', 'CFA Level 1', 'IIM Calcutta', 'National Level Hockey', 'NCC Certified'].map(
              (badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white/80 rounded-full text-sm font-medium"
                >
                  <Award size={16} />
                  {badge}
                </span>
              )
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
