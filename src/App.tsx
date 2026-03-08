import { Menu, X, Code, Zap, Shield, Users, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-[#133d63] z-50 border-b-4 border-[#3e9fa1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-[#3e9fa1]" />
              <span className="ml-2 text-xl font-bold text-white">DevSoft</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#3e9fa1] transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#3e9fa1] transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-[#3e9fa1] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#3e9fa1] transition-colors">Contact</button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#133d63] border-t border-[#3e9fa1]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-white hover:bg-[#3e9fa1]">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-white hover:bg-[#3e9fa1]">Services</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-white hover:bg-[#3e9fa1]">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-white hover:bg-[#3e9fa1]">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-16 min-h-screen flex items-center bg-[#133d63]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Building Software Solutions for Tomorrow
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We craft cutting-edge applications that transform your ideas into powerful, scalable software solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-[#3e9fa1] text-white font-semibold hover:bg-opacity-90 transition-all border-2 border-[#3e9fa1]"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-transparent text-white font-semibold border-2 border-white hover:bg-white hover:text-[#133d63] transition-all"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#3e9fa1] p-8 border-4 border-white">
                <Code className="h-64 w-64 text-white mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#133d63] mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#3e9fa1] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-[#133d63] p-8 hover:border-[#3e9fa1] transition-colors">
              <Zap className="h-12 w-12 text-[#3e9fa1] mb-4" />
              <h3 className="text-2xl font-bold text-[#133d63] mb-4">Custom Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Tailored software solutions designed to meet your specific business needs and objectives.
              </p>
            </div>

            <div className="bg-white border-4 border-[#133d63] p-8 hover:border-[#3e9fa1] transition-colors">
              <Shield className="h-12 w-12 text-[#3e9fa1] mb-4" />
              <h3 className="text-2xl font-bold text-[#133d63] mb-4">Security First</h3>
              <p className="text-gray-700 leading-relaxed">
                Enterprise-grade security measures to protect your data and ensure compliance with industry standards.
              </p>
            </div>

            <div className="bg-white border-4 border-[#133d63] p-8 hover:border-[#3e9fa1] transition-colors">
              <Users className="h-12 w-12 text-[#3e9fa1] mb-4" />
              <h3 className="text-2xl font-bold text-[#133d63] mb-4">Team Collaboration</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamless integration with your team to deliver projects on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-[#133d63]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-[#3e9fa1] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-[#3e9fa1] overflow-hidden">
              <div className="h-48 bg-[#3e9fa1] flex items-center justify-center">
                <Code className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#133d63] mb-3">Enterprise Dashboard</h3>
                <p className="text-gray-700 mb-4">
                  Real-time analytics platform processing millions of data points daily.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#133d63] text-white text-sm">React</span>
                  <span className="px-3 py-1 bg-[#133d63] text-white text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-[#133d63] text-white text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-[#3e9fa1] overflow-hidden">
              <div className="h-48 bg-[#3e9fa1] flex items-center justify-center">
                <Shield className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#133d63] mb-3">Security Suite</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive security monitoring and threat detection system.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#133d63] text-white text-sm">Python</span>
                  <span className="px-3 py-1 bg-[#133d63] text-white text-sm">Docker</span>
                  <span className="px-3 py-1 bg-[#133d63] text-white text-sm">Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#133d63] mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-[#3e9fa1] mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-[#133d63] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-[#133d63] focus:border-[#3e9fa1] outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#133d63] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-[#133d63] focus:border-[#3e9fa1] outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[#133d63] font-semibold mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-[#133d63] focus:border-[#3e9fa1] outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#3e9fa1] text-white font-bold hover:bg-opacity-90 transition-all border-2 border-[#3e9fa1]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#133d63] text-white py-12 border-t-4 border-[#3e9fa1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-[#3e9fa1]" />
                <span className="ml-2 text-xl font-bold">DevSoft</span>
              </div>
              <p className="text-gray-300">
                Building the future, one line of code at a time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-[#3e9fa1]">Services</button>
                <button onClick={() => scrollToSection('projects')} className="block text-gray-300 hover:text-[#3e9fa1]">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-[#3e9fa1]">Contact</button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#3e9fa1] transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#3e9fa1] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#3e9fa1] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#3e9fa1] transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#3e9fa1] pt-8 text-center text-gray-300">
            <p>&copy; 2024 DevSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
