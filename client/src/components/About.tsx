import { GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Computer Engineering graduate with a strong foundation in full-stack development. 
                My journey in technology began with a curiosity about how things work and evolved into a dedication 
                to creating meaningful digital solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With expertise in the Java ecosystem and modern web technologies, I focus on building scalable, 
                efficient applications that solve real-world problems. I'm constantly learning and adapting to 
                new technologies to stay at the forefront of development.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-violet-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl border border-blue-100 dark:border-slate-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Bachelor of Technology</h3>
                    <p className="text-gray-600 dark:text-gray-300">Computer Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Comprehensive study in computer systems, programming, and software engineering</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-violet-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl border border-violet-100 dark:border-slate-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Diploma</h3>
                    <p className="text-gray-600 dark:text-gray-300">Computer Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Foundation in programming, database management, and system design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with dual monitors showing code" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600" data-testid="projects-count">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-violet-600" data-testid="technologies-count">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
