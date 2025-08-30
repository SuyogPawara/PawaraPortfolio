import { Download, User, ChevronDown } from 'lucide-react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { Button } from '@/components/ui/button';
import profilePic from './SuyogCrop.jpg';


export default function Hero() {
  const typingText = useTypingAnimation({
    phrases: [
      'Java Full Stack Developer',
      'Problem Solver',
      'Tech Enthusiast',
      'Innovation Driver'
    ],
    typeSpeed: 150,
    deleteSpeed: 100,
    pauseTime: 2000,
  });

  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Suyog_Pawara_Resume.pdf';
    link.click();
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#about');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-violet-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 animate-gradient bg-[length:400%_400%]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-slide-up">
          {/* Professional Image */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-violet-500 p-1 animate-glow">
           <img 
             // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
             src={profilePic}
              alt="Suyog Pawara - Professional Developer" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:tec:\Myphotos\Suyog.jpgxt-7xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
              Suyog Pawara
            </h1>
            
            {/* Typing Animation Container */}
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 min-h-[1.5em]">
              <span className="inline-block border-r-2 border-blue-500 pr-2" data-testid="typing-text">
                {typingText}
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Computer Engineering graduate passionate about creating innovative solutions with modern technologies. 
            Specialized in full-stack development with Java ecosystem and cutting-edge frameworks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              data-testid="download-resume"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={scrollToPortfolio}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              data-testid="view-portfolio"
            >
              <User className="w-5 h-5 mr-2" />
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}
