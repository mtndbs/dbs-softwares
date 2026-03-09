import React from "react";
import { AppTitle } from "../components/AppTitle";
import { navLinks, socialLinks } from "../data/lists";
import { AppButton } from "../components/AppButton";

type Props = {
  scrollToSection: (id: string) => void;
};

export default function Footer({ scrollToSection }: Props) {
  return (
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
            <AppTitle as="h3" className="text-lg mb-4">
              Quick Links
            </AppTitle>
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
            <AppTitle as="h3" className="text-lg mb-4">
              Connect With Us
            </AppTitle>
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
  );
}
