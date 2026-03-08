import {
  LuMenu as Menu,
  LuX as X,
  LuCode as Code,
  LuShield as Shield,
  LuMail as Mail,
  LuGithub as Github,
  LuLinkedin as Linkedin,
  LuTwitter as Twitter,
} from "react-icons/lu";
import {
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiPhp,
  SiFlutter,
  SiReact,
  SiGooglecloud,
  SiFirebase,
  SiNextdotjs,
  SiDigitalocean,
  SiDocker,
  SiSupabase,
  SiLangchain,
  SiPytorch,
} from "react-icons/si";
import { FaAws, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import logo from "./assets/logo.webp";
import noBGlogo from "./assets/logo_no_bg.png";
import xxlLogo from "./assets/xxl_logo.png";
import rekezetLogo from "./assets/icons/rekezet.svg";
import accelerateIcon from "./assets/icons/accelerate-svgrepo-com.svg";
import computerIcon from "./assets/icons/computer-svgrepo-com.svg";
import cellPhoneIcon from "./assets/icons/cell-phone-svgrepo-com.svg";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: computerIcon,
      title: "Web & Desktop Apps",
      description:
        "Tailored web and desktop applications designed to meet your specific business needs with cutting-edge technologies.",
    },
    {
      icon: cellPhoneIcon,
      title: "Mobile Development",
      description:
        "Seamless, responsive, and intuitive mobile solutions for iOS and Android platforms to engage your users on the go.",
    },
    {
      icon: accelerateIcon,
      title: "Performance & Growth",
      description:
        "Accelerate your business with lightning-fast applications, optimized architecture, and scalable infrastructure.",
    },
  ];

  const projects = [
    {
      icon: Code,
      title: "Memdalet Prints",
      description:
        "Complex e-commerce platform featuring a custom print order flow integration, real-time order tracking, direct branch chat functionality, and a comprehensive admin panel with extensive configurations.",
      tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      image: xxlLogo,
      url: "https://www.memdalet.co.il/",
    },
    {
      icon: Shield,
      title: "Rekezet Edu-App",
      description:
        "An advanced educational platform built with modern technologies, featuring an AI RAG (Retrieval-Augmented Generation) system and intelligent AI agents to handle events.",
      image: rekezetLogo,
      tags: [
        "Node.js",
        "React",
        "Flutter",
        "Langchain",
        "PostgreSQL",
        "Docker",
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Mail, href: "#" },
  ];

  const techStack = [
    { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#4169E1]" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
    { icon: SiPhp, name: "", color: "text-[#777BB4]" },
    { icon: SiFlutter, name: "Flutter", color: "text-[#02569B]" },
    { icon: SiReact, name: "React / Native", color: "text-[#61DAFB]" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
    { icon: FaAws, name: "", color: "text-[#232F3E]" },
    { icon: SiSupabase, name: "Supabase", color: "text-[#232F3E]" },
    { icon: SiDigitalocean, name: "DigitalOcean", color: "text-[#0080FF]" },
    { icon: SiFirebase, name: "Firebase", color: "text-[#FFCA28]" },
    { icon: SiGooglecloud, name: "Google Cloud", color: "text-[#0080FF]" },
    { icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },
    { icon: SiLangchain, name: "Langchain", color: "text-[#FF5733]" },
    { icon: SiPytorch, name: "PyTorch", color: "text-[#EE4C2C]" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-primary z-50 border-b-4 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* <img src={logo} alt="App Logo" className="h-8 w-auto" /> */}
              <span className="ml-2 text-xl font-bold text-white">
                DBS softwares
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-secondary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-secondary"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Building Software Solutions for Tomorrow
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                We craft cutting-edge applications that transform your ideas
                into powerful, scalable software solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 bg-secondary text-white font-semibold hover:bg-opacity-90 transition-all border-2 border-secondary"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-transparent text-white font-semibold border-2 border-white hover:bg-white hover:text-primary transition-all"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative -mx-4 sm:mx-0">
              {/* <div className="bg-secondary p-8 border-4 border-white"> */}
              <img
                src={logo}
                alt="App Logo"
                className="w-full  md:w-auto mx-auto border border-r-secondary border-r-8 object-contain"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="w-full bg-white border-b-4 border-b-secondary overflow-hidden py-6">
        <div className="flex whitespace-nowrap animate-marquee-mobile md:animate-marquee">
          {/* We render the tech stack text and icons twice for seamless looping */}
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex flex-shrink-0 items-center gap-12 px-6"
            >
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className={`text-4xl ${tech.color}`} />
                    <span className="text-xl font-bold text-primary">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border-4 border-primary p-8 hover:border-secondary transition-colors group flex flex-col"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-16 w-16 mb-6 transition-transform group-hover:scale-110"
                  />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-primary font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-primary focus:border-secondary outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-primary focus:border-secondary outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-primary focus:border-secondary outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-1/2 px-8 py-4 bg-secondary text-white font-bold hover:bg-opacity-90 transition-all border-2 border-secondary"
                >
                  Send Message
                </button>
                <a
                  href="https://wa.me/972585875652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all border-2 border-[#25D366]"
                >
                  <FaWhatsapp className="text-2xl" />
                  WhatsApp Us
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 border-t-4 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                {/* <img src={noBGlogo} alt="App Logo" className="h-8 w-auto" /> */}
                {/* <Code className="h-8 w-8 text-secondary" /> */}
                <span className="ml-2 text-xl font-bold">DBS softwares</span>
              </div>
              <p className="text-gray-300">
                Building the future, one line of code at a time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks
                  .filter((link) => link.id !== "home")
                  .map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="block text-gray-300 hover:text-secondary"
                    >
                      {link.label}
                    </button>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-secondary pt-8 text-center text-gray-300">
            <p>&copy; 2024 DBS softwares. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
