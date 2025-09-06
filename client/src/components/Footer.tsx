import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/suyogpawara', testId: 'footer-linkedin' },
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/suyogpawara', testId: 'footer-github' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/suyogpawara', testId: 'footer-twitter' },
    { icon: <Mail className="w-5 h-5" />, url: 'mailto:suyogpawara04@gmail.com', testId: 'footer-email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                SP
              </div>
              <span className="font-bold text-xl">Suyog Pawara</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Java Full Stack Developer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">suyogpawara04@gmail.com</p>
              <p className="text-gray-400">+91 1234567890</p>
              <p className="text-gray-400">Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Suyog Pawara. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid={link.testId}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
