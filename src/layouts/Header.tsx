import React from "react";
import { navLinks } from "../data/lists";
import { AppButton } from "../components/AppButton";
import { LuMenu as Menu, LuX as X } from "react-icons/lu";

type Props = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (id: string) => void;
};

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}: Props) {
  return (
    <nav className="fixed w-full bg-primary z-50 border-b-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
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
  );
}
