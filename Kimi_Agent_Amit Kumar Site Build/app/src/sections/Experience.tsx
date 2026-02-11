import { ScrollReveal } from '@/components/ScrollReveal';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Adani Enterprises',
    role: 'Associate Manager (Group Corporate Finance & M&A, Group CFO\'s Office)',
    location: 'Ahmedabad, India',
    period: 'May 2024 - Present',
    highlights: [
      'Supported bid evaluation for $1.3B Jaiprakash Associates assets under CIRP',
      'Led financial modeling for Alaknanda 330 MW Hydro assets',
      'Strengthened global presence through NDR in Hong Kong, Singapore & London, and delivered all pitchdecks',
      'Filed $2B+ merger scheme with NCLT',
      'Created Power BI dashboard managing 50+ gigawatts renewable assets',
    ],
  },
  {
    company: 'SA Global Advisors',
    role: 'Investment Banking Analyst Intern',
    location: 'Pune, India',
    period: 'Oct 2023 - Feb 2024',
    highlights: [
      'Assisted deal origination worth $10M-$15M in Digital Transformation',
      'Identified 350+ target acquisition companies across 10+ countries',
      'Scanned 80 publicly listed Indian IT companies for potential deals',
    ],
  },
  {
    company: 'IIM Calcutta Innovation Park',
    role: 'Student Investments Team',
    location: 'Kolkata, India',
    period: 'Jul 2023 - Oct 2023',
    highlights: [
      'Increased startup screening efficiency by 20%',
      '1/15 selected from 800+ applicants',
      'Mentored 2 early-stage startups',
    ],
  },
  {
    company: 'Stuffin',
    role: 'Co-Founder',
    location: 'Patna, India',
    period: 'Sept 2022 - Jun 2023',
    highlights: [
      'Received ₹10Lac seed grant from Bihar Govt',
      'Achieved profitability with ₹10Lac+ revenue',
      'Selected in Wadhwani Foundation accelerator',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-navy-800 tracking-wider uppercase mb-4">
              Experience
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Building Value Through{' '}
              <span className="text-navy-800">Strategic Transactions</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index !== 0 ? 'lg:mt-12' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-navy-800 border-4 border-white shadow-md" />
                </div>

                {/* Content */}
                <ScrollReveal
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 100}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card card-hover">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {exp.company}
                        </h3>
                        <p className="text-navy-800 font-medium mt-1">{exp.role}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <ChevronRight
                            size={18}
                            className="text-navy-800 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
