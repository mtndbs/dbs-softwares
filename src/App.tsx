import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import logo from "./assets/logo.webp";
import { ProjectCard } from "./components/ProjectCard";
import { AppButton } from "./components/AppButton";
import { SectionHeader } from "./components/SectionHeader";
import { AppInput } from "./components/AppInput";
import { AppTextarea } from "./components/AppTextarea";
import { AppTitle } from "./components/AppTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import { projects, services, techStack } from "./data/lists";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

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
      // Use import.meta.env.FORMSPREE, configured in vite.config.ts
      const formEndpoint = import.meta.env.FORMSPREE;

      if (!formEndpoint) {
        throw new Error("Formspree endpoint is not configured.");
      }

      const response = await fetch(formEndpoint, {
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
    <div className="min-h-screen bg-transparent">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <section
        id="home"
        data-header-theme="dark"
        className="relative flex overflow-hidden bg-brand-gradient"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        <div className="">
          <div className="grid md:grid-cols-2 gap-12 items-center md:min-h-[70vh]">
            <div className="md:px-20 px-8 py-24 relative z-10">
              <AppTitle
                as="h1"
                className="text-4xl md:text-5xl xl:text-6xl text-brand-gradient-light mb-6 leading-tight"
              >
                Building Software Solutions for Tomorrow
              </AppTitle>
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
            <div
              data-header-theme="light"
              className="bg-white flex flex-col justify-center items-center h-full border-t-8 max-sm:border-t-secondary md:border-l-8 md:border-l-secondary"
            >
              <img
                src={logo}
                alt="App Logo"
                className="w-full  md:w-auto mx-auto  object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <div
        data-header-theme="light"
        className="w-full surface-brand border-b-4 border-b-secondary overflow-hidden py-6"
      >
        <div className="flex whitespace-nowrap animate-marquee-mobile md:animate-marquee">
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

      <section
        id="services"
        data-header-theme="light"
        className="py-20 bg-brand-soft"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Services" />

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="surface-brand border-4 border-primary p-8 hover:border-secondary transition-colors group flex flex-col shadow-[0_14px_35px_rgba(19,61,99,0.08)]"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-16 w-16 mb-6 transition-transform group-hover:scale-110"
                  />
                  <AppTitle
                    as="h3"
                    className="text-2xl text-brand-gradient mb-4"
                  >
                    {service.title}
                  </AppTitle>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="projects"
        data-header-theme="dark"
        className="py-20 bg-brand-gradient relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Projects"
            textColor="text-brand-gradient-light"
          />

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-header-theme="light"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Get In Touch" />

          <div className="max-w-2xl mx-auto surface-brand border-4 border-primary p-8 md:p-10 shadow-[0_18px_40px_rgba(19,61,99,0.12)]">
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

      <div data-header-theme="dark">
        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

export default App;
