import xxlLogo from "../assets/xxl_logo.png";
import rekezetLogo from "../assets/icons/rekezet.svg";
import accelerateIcon from "../assets/icons/accelerate-svgrepo-com.svg";
import computerIcon from "../assets/icons/computer-svgrepo-com.svg";
import cellPhoneIcon from "../assets/icons/cell-phone-svgrepo-com.svg";
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
import { FaAws } from "react-icons/fa6";

import {
  LuMail as Mail,
  LuGithub as Github,
  LuLinkedin as Linkedin,
} from "react-icons/lu";

export const services = [
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

export const projects = [
  {
    title: "Memdalet Prints",
    description:
      "Complex e-commerce platform featuring a custom print order flow integration, real-time order tracking, direct branch chat functionality, and a comprehensive admin panel with extensive configurations.",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: xxlLogo,
    url: "https://www.memdalet.co.il/",
  },
  {
    title: "Rekezet Edu-App",
    description:
      "An advanced educational platform built with modern technologies, featuring an AI RAG (Retrieval-Augmented Generation) system and intelligent AI agents to handle events.",
    image: rekezetLogo,
    tags: ["Node.js", "React", "Flutter", "Langchain", "PostgreSQL", "Docker"],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/mtndbs" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/matan-daboosh-85888b232/",
  },
  { icon: Mail, href: "mailto:mtndbs@gmail.com" },
];
export const techStack = [
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
