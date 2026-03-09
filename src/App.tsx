import { LuMenu as Menu, LuX as X } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import logo from "./assets/logo.webp";
import { ProjectCard } from "./components/ProjectCard";
import { AppButton } from "./components/AppButton";
import { SectionHeader } from "./components/SectionHeader";
import { AppInput } from "./components/AppInput";
import { AppTextarea } from "./components/AppTextarea";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  navLinks,
  projects,
  services,
  socialLinks,
  techStack,
} from "./data/lists";

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mreyelna", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        reset();
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <AppButton
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  variant="nav"
                  size="none"
                >
                  {link.label}
                </AppButton>
              ))}
            </div>

            <AppButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="none"
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </AppButton>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <AppButton
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  variant="ghost"
                  size="none"
                  className="block w-full text-left px-3 py-2 text-white hover:bg-secondary"
                >
                  {link.label}
                </AppButton>
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
                <AppButton onClick={() => scrollToSection("contact")}>
                  Get Started
                </AppButton>
                <AppButton
                  variant="outline"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </AppButton>
              </div>
            </div>
            <div className="relative -mx-4 sm:mx-0">
              <img
                src={logo}
                alt="App Logo"
                className="w-full  md:w-auto mx-auto border border-r-secondary border-r-8 object-contain"
              />
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
          <SectionHeader title="Our Services" />

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
          <SectionHeader title="Featured Projects" textColor="text-white" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Get In Touch" />

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <AppInput
                label="Name"
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
                error={errors.name}
              />

              <AppInput
                label="Email"
                placeholder="your@email.com"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={errors.email}
              />

              <AppTextarea
                label="Message"
                placeholder="Tell us about your project..."
                rows={6}
                {...register("message", { required: "Message is required" })}
                error={errors.message}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <AppButton
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full sm:w-1/2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </AppButton>
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
              {submissionStatus === "success" && (
                <div className="p-4 bg-green-100 text-green-700 border border-green-400 rounded">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="p-4 bg-red-100 text-red-700 border border-red-400 rounded">
                  Something went wrong. Please try again or contact us via
                  WhatsApp.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 border-t-4 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
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
                    <AppButton
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      variant="ghost"
                      size="none"
                      className="block text-gray-300 hover:text-secondary"
                    >
                      {link.label}
                    </AppButton>
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
