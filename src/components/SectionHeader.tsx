import React from "react";

interface SectionHeaderProps {
  title: string;
  className?: string; // For text/line customization via tailwind classes if needed, but props are cleaner
  textColor?: string;
}

export function SectionHeader({
  title,
  textColor = "text-primary",
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-4xl font-bold ${textColor} mb-4`}>{title}</h2>
      <div className="w-24 h-1 bg-secondary mx-auto"></div>
    </div>
  );
}
