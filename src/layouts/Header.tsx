import React, { useEffect, useState } from "react";
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
  const [headerTheme, setHeaderTheme] = useState({
    shell: "dark",
    brand: "dark",
    nav: "dark",
  });

  useEffect(() => {
    let frameId = 0;

    const getThemeAtPoint = (x: number, y: number) => {
      const element = document.elementFromPoint(x, y);
      const themedSection = element?.closest<HTMLElement>(
        "[data-header-theme]",
      );
      return themedSection?.dataset.headerTheme === "light" ? "light" : "dark";
    };

    const updateHeaderTheme = () => {
      const sampleY = 72;
      const centerTheme = getThemeAtPoint(window.innerWidth / 2, sampleY);

      if (window.innerWidth >= 768) {
        const brandTheme = getThemeAtPoint(window.innerWidth * 0.2, sampleY);
        const navTheme = getThemeAtPoint(window.innerWidth * 0.8, sampleY);

        setHeaderTheme({
          shell: brandTheme === navTheme ? centerTheme : "split",
          brand: brandTheme,
          nav: navTheme,
        });

        return;
      }

      setHeaderTheme({
        shell: centerTheme,
        brand: centerTheme,
        nav: centerTheme,
      });
    };

    const scheduleHeaderThemeUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        updateHeaderTheme();
        frameId = 0;
      });
    };

    updateHeaderTheme();
    window.addEventListener("scroll", scheduleHeaderThemeUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleHeaderThemeUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleHeaderThemeUpdate);
      window.removeEventListener("resize", scheduleHeaderThemeUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const navShellClassName =
    headerTheme.shell === "dark"
      ? "bg-primary/78 text-white border-secondary/60 shadow-[0_16px_40px_rgba(19,61,99,0.25)]"
      : "bg-white/88 text-primary border-primary/10 shadow-[0_14px_36px_rgba(19,61,99,0.12)]";
  const brandTextClassName =
    headerTheme.brand === "dark"
      ? "!text-brand-gradient-light"
      : "!text-primary";
  const navLinkClassName =
    headerTheme.nav === "dark"
      ? "!text-white hover:text-secondary"
      : "!text-primary hover:text-secondary";
  const mobileToggleClassName =
    headerTheme.brand === "dark" ? "text-white" : "text-primary";
  const mobileMenuClassName =
    headerTheme.nav === "dark"
      ? "bg-primary/95 border-secondary/60"
      : "bg-white/95 border-primary/10";

  return (
    <nav
      className={`fixed w-full z-50 border-b backdrop-blur-md transition-colors duration-300 ${navShellClassName}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span
              className={`ml-2 text-xl font-bold transition-colors duration-300 ${brandTextClassName}`}
            >
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
                className={navLinkClassName}
              >
                {link.label}
              </AppButton>
            ))}
          </div>

          <AppButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="ghost"
            size="none"
            className={`md:hidden transition-colors duration-300 ${mobileToggleClassName}`}
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
        <div
          className={`md:hidden border-t backdrop-blur-md transition-colors duration-300 ${mobileMenuClassName}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <AppButton
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                variant="ghost"
                size="none"
                className={`block w-full text-left px-3 py-2 transition-colors duration-300 ${
                  headerTheme.nav === "dark"
                    ? "text-white hover:bg-secondary/20"
                    : "text-primary hover:bg-primary/5"
                }`}
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
