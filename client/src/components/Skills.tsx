import { useEffect, useRef, useState } from 'react';
import { Code, Layers, Database, Brain } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Skill } from '@/types/portfolio';

const skillsData: Skill[] = [
  { name: 'Java', level: 90, category: 'languages' },
  { name: 'JavaScript', level: 85, category: 'languages' },
  { name: 'SQL', level: 80, category: 'languages' },
  { name: 'HTML/CSS', level: 88, category: 'languages' },
  { name: 'Spring Boot', level: 85, category: 'frameworks' },
  { name: 'Hibernate', level: 80, category: 'frameworks' },
  { name: '.NET', level: 75, category: 'frameworks' },
  { name: 'MySQL', level: 85, category: 'databases' },
  { name: 'VS Code', level: 90, category: 'tools' },
  { name: 'IntelliJ IDEA', level: 88, category: 'tools' },
  { name: 'Eclipse', level: 82, category: 'tools' },
];

const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Critical Thinking',
  'Adaptability',
];

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
}

function SkillBar({ skill, isVisible }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  const getGradientClass = (index: number) => {
    const gradients = [
      'from-blue-500 to-violet-500',
      'from-violet-500 to-cyan-500',
      'from-cyan-500 to-blue-500',
      'from-blue-500 to-cyan-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`bg-gradient-to-r ${getGradientClass(0)} h-2 rounded-full transition-all duration-1500 ease-out`}
          style={{ width: `${width}%` }}
          data-testid={`skill-bar-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
        />
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  isVisible: boolean;
  gradientClass: string;
}

function SkillCategory({ title, icon, skills, isVisible, gradientClass }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${gradientClass} rounded-lg flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { elementRef, isVisible } = useScrollAnimation();

  const skillsByCategory = {
    languages: skillsData.filter(skill => skill.category === 'languages'),
    frameworks: skillsData.filter(skill => skill.category === 'frameworks'),
    databases: skillsData.filter(skill => skill.category === 'databases'),
    tools: skillsData.filter(skill => skill.category === 'tools'),
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building robust applications
          </p>
        </div>

        <div 
          ref={elementRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <SkillCategory
            title="Languages"
            icon={<Code className="w-6 h-6 text-white" />}
            skills={skillsByCategory.languages}
            isVisible={isVisible}
            gradientClass="from-blue-500 to-violet-500"
          />

          <SkillCategory
            title="Frameworks"
            icon={<Layers className="w-6 h-6 text-white" />}
            skills={skillsByCategory.frameworks}
            isVisible={isVisible}
            gradientClass="from-violet-500 to-cyan-500"
          />

          <SkillCategory
            title="Database & Tools"
            icon={<Database className="w-6 h-6 text-white" />}
            skills={[...skillsByCategory.databases, ...skillsByCategory.tools]}
            isVisible={isVisible}
            gradientClass="from-cyan-500 to-blue-500"
          />

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
            </div>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    index % 5 === 0 ? 'bg-blue-500' :
                    index % 5 === 1 ? 'bg-violet-500' :
                    index % 5 === 2 ? 'bg-cyan-500' :
                    index % 5 === 3 ? 'bg-blue-600' : 'bg-violet-600'
                  }`}></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
