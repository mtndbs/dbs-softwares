import React from "react";
import { AppTitle } from "./AppTitle";

interface SectionHeaderProps {
  title: string;
  className?: string;
  textColor?: string;
}

export function SectionHeader({
  title,
  className = "",
  textColor = "text-brand-gradient",
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <AppTitle
        as="h2"
        className={`text-4xl md:text-5xl ${textColor} ${className} mb-4`}
      >
        {title}
      </AppTitle>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
    </div>
  );
}
