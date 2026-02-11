import { ScrollReveal } from '@/components/ScrollReveal';
import { GraduationCap, Award, BookOpen, TrendingUp } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  year?: string;
  details: string[];
  icon: React.ReactNode;
}

const educationData: EducationItem[] = [
  {
    institution: 'IIM Calcutta',
    degree: 'Master of Business Administration (MBA)',
    year: '2018-22',
    details: [
      'Student Investment Cohort (IIMCIP)',
      'Finance & Investments Club',
      'Hockey Team Captain',
    ],
    icon: <GraduationCap size={28} />,
  },
  {
    institution: 'IIM Indore',
    degree: 'Bachelor of Arts - Foundations of Management',
    details: [
      'AIR 125/17K+ (99.29%ile) in IPMAT',
      'Entrepreneurial Cell Member',
      'Institute Football Team',
    ],
    icon: <BookOpen size={28} />,
  },
  {
    institution: 'CFA Institute',
    degree: 'CFA Level 1',
    year: '2023',
    details: [
      'Top 10%ile performer',
      'Fixed Income & Financial Statement Analysis',
      'Equity & Alternate Investments',
    ],
    icon: <TrendingUp size={28} />,
  },
  {
    institution: 'Corporate Financial Institute (CFI)',
    degree: 'FMVA® Certification',
    year: '2022-24',
    details: [
      '85% score, FMVA® Designation awarded',
      'DCF Valuation & Operational Modelling',
      'Comparable Valuation Analysis',
    ],
    icon: <Award size={28} />,
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-navy-800 tracking-wider uppercase mb-4">
              Education
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Academic Excellence &{' '}
              <span className="text-navy-800">Professional Certifications</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {educationData.map((item, index) => (
            <ScrollReveal key={item.institution} delay={index * 100}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 h-full card-hover group">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy-800 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-navy-800 font-medium">{item.degree}</p>
                  {item.year && (
                    <span className="inline-block mt-2 text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  )}
                </div>

                {/* Details */}
                <ul className="space-y-2">
                  {item.details.map((detail, dIndex) => (
                    <li
                      key={dIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
