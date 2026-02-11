import { ScrollReveal } from '@/components/ScrollReveal';
import { Trophy, Users, Timer, Medal, Quote } from 'lucide-react';

interface SportHighlight {
  sport: string;
  achievements: string[];
  icon: React.ReactNode;
}

const sportsHighlights: SportHighlight[] = [
  {
    sport: 'Hockey',
    achievements: [
      'Captain, IIM Calcutta Hockey Team',
      'Led squad of 16+ players',
      'Secured 2nd Position in Sangharsh\'24',
      'National Level Hockey Player',
    ],
    icon: <Trophy size={24} />,
  },
  {
    sport: 'Football',
    achievements: [
      'State Level Football Player (2016-18)',
      'Member, Institute Football Team (IIM Calcutta)',
      'Member, Institute Football Team (IIM Indore)',
    ],
    icon: <Users size={24} />,
  },
  {
    sport: 'Athletics',
    achievements: [
      '10KM Infantry run in under 50 minutes',
      'Udaan 42.2KM Marathon (2018-19)',
    ],
    icon: <Timer size={24} />,
  },
];

export function Sports() {
  return (
    <section id="sports" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold text-navy-800 tracking-wider uppercase mb-4">
                Sports
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Leadership On and{' '}
                <span className="text-navy-800">Off the Field</span>
              </h2>
            </ScrollReveal>

            {/* Sports Highlights */}
            <div className="space-y-6 mb-8">
              {sportsHighlights.map((sport, index) => (
                <ScrollReveal key={sport.sport} delay={200 + index * 100}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center flex-shrink-0">
                      {sport.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {sport.sport}
                      </h3>
                      <ul className="space-y-1">
                        {sport.achievements.map((achievement, aIndex) => (
                          <li
                            key={aIndex}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <Medal size={14} className="text-navy-800 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Quote */}
            <ScrollReveal delay={500}>
              <div className="relative bg-gray-50 rounded-2xl p-6 md:p-8">
                <Quote
                  size={32}
                  className="absolute top-4 left-4 text-navy-800/20"
                />
                <blockquote className="relative z-10 text-gray-700 italic pl-8">
                  "Sports taught me discipline, teamwork, and resilience - qualities 
                  that define my approach to every professional challenge."
                </blockquote>
                <cite className="relative z-10 block mt-4 text-sm text-gray-500 pl-8 not-italic">
                  — Amit Kumar
                </cite>
              </div>
            </ScrollReveal>
          </div>

          {/* Image Column */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/images/hockey-team.jpg"
                  alt="IIM Calcutta Hockey Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy-800/5 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-navy-800/10 rounded-2xl -z-10" />
              
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm font-medium text-gray-900">
                  IIM Calcutta Hockey Team
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Sangharsh'24 - 2nd Position
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
