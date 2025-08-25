import { Award, Database, Code, Brain, Globe, Shield, ExternalLink } from 'lucide-react';
import type { Certificate } from '@/types/portfolio';

const certificatesData: Certificate[] = [
  {
    id: '1',
    title: 'Java Programming Certification',
    issuer: 'Oracle Certified Associate',
    year: '2023',
    description: 'Comprehensive certification covering core Java concepts, object-oriented programming, and best practices.',
    url: 'https://github.com/suyogpawara/certificates/java-certification',
    icon: 'award',
  },
  {
    id: '2',
    title: 'Database Management',
    issuer: 'MySQL Professional Certification',
    year: '2023',
    description: 'Advanced database design, optimization, and administration skills with MySQL technologies.',
    url: 'https://github.com/suyogpawara/certificates/mysql-certification',
    icon: 'database',
  },
  {
    id: '3',
    title: 'Full Stack Development',
    issuer: 'Spring Boot Specialization',
    year: '2024',
    description: 'Complete mastery of Spring Boot framework for building enterprise-grade applications.',
    url: 'https://github.com/suyogpawara/certificates/spring-boot-certification',
    icon: 'code',
  },
  {
    id: '4',
    title: 'Machine Learning',
    issuer: 'Deep Learning Specialization',
    year: '2024',
    description: 'Advanced neural networks and deep learning algorithms for computer vision applications.',
    url: 'https://github.com/suyogpawara/certificates/ml-certification',
    icon: 'brain',
  },
  {
    id: '5',
    title: 'Web Development',
    issuer: 'Modern Frontend Technologies',
    year: '2023',
    description: 'Comprehensive training in React, TypeScript, and modern web development practices.',
    url: 'https://github.com/suyogpawara/certificates/web-dev-certification',
    icon: 'globe',
  },
  {
    id: '6',
    title: 'Software Engineering',
    issuer: 'Best Practices Certification',
    year: '2024',
    description: 'Industry best practices for software design, testing, and deployment methodologies.',
    url: 'https://github.com/suyogpawara/certificates/software-engineering',
    icon: 'shield',
  },
];

function getIcon(iconName: string) {
  const iconProps = { className: "w-8 h-8 text-white" };
  
  switch (iconName) {
    case 'award': return <Award {...iconProps} />;
    case 'database': return <Database {...iconProps} />;
    case 'code': return <Code {...iconProps} />;
    case 'brain': return <Brain {...iconProps} />;
    case 'globe': return <Globe {...iconProps} />;
    case 'shield': return <Shield {...iconProps} />;
    default: return <Award {...iconProps} />;
  }
}

function getGradientClass(index: number) {
  const gradients = [
    'from-blue-500 to-violet-500',
    'from-violet-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-green-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
  ];
  return gradients[index % gradients.length];
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Certificates & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements showcasing continuous learning and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificate, index) => (
            <div
              key={certificate.id}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group"
              data-testid={`certificate-card-${certificate.id}`}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${getGradientClass(index)} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(certificate.icon)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{certificate.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{certificate.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {certificate.description}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-400">{certificate.year}</span>
                <a 
                  href={certificate.url}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  data-testid={`certificate-link-${certificate.id}`}
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
