import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types/portfolio';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Mobile Recharge Management System',
    description: 'Comprehensive platform for managing mobile recharge operations with user authentication, payment processing, and transaction history tracking.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS'],
    tags: ['java', 'spring', 'web'],
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    githubUrl: 'https://github.com/SuyogPawara/Mobile-Recharge-Management-System',
    liveUrl: '#',
    category: 'web',
  },
  {
    id: '2',
    title: 'Hospital Management System',
    description: 'Enterprise-grade healthcare management solution featuring patient records, appointment scheduling, inventory management, and staff coordination modules.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
    tags: ['java', 'spring', 'web'],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    githubUrl: 'https://github.com/SuyogPawara/HospitalManagementSystem',
    liveUrl: '#',
    category: 'enterprise',
  },
  {
    id: '3',
    title: 'Bank Management System',
    description: 'Secure banking platform with account management, transaction processing, loan management, and comprehensive reporting with advanced security features.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    tags: ['java', 'spring', 'web'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    githubUrl: 'https://github.com/SuyogPawara/Bank-Management-System',
    liveUrl: '#',
    category: 'enterprise',
  },
  {
    id: '4',
    title: 'Food Image Recognition (CNN)',
    description: 'Deep learning project using Convolutional Neural Networks to classify and recognize different food items from images with high accuracy and real-time processing capabilities.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    tags: ['ml', 'java', 'web'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    githubUrl: 'https://github.com/SuyogPawara/Food-Image-Recognition',
    liveUrl: '#',
    category: 'ml',
  },
];

const filterButtons = [
  { label: 'All Projects', value: 'all' },
  { label: 'Java', value: 'java' },
  { label: 'Spring Boot', value: 'spring' },
  { label: 'Machine Learning', value: 'ml' },
  { label: 'Web Development', value: 'web' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter(project =>
    activeFilter === 'all' || project.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase of real-world applications built with modern technologies
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map((button) => (
            <Button
              key={button.value}
              onClick={() => setActiveFilter(button.value)}
              variant={activeFilter === button.value ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${activeFilter === button.value
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              data-testid={`filter-${button.value}`}
            >
              {button.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              data-testid={`project-card-${project.id}`}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} workspace`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/20"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {project.category === 'web' ? 'Web Application' :
                      project.category === 'enterprise' ? 'Enterprise System' :
                        project.category === 'ml' ? 'AI/ML Project' : 'Mobile App'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${tech === 'Java' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                          tech === 'Spring Boot' ? 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200' :
                            tech === 'MySQL' ? 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200' :
                              tech === 'Python' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                                tech === 'TensorFlow' ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' :
                                  'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                    data-testid={`github-link-${project.id}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors duration-200"
                      data-testid={`live-demo-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
