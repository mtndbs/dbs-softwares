import React, { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "nav";
type Size = "sm" | "md" | "lg" | "none";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function AppButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: AppButtonProps) {
  let baseStyles = "transition-all duration-200";
  let variantStyles = "";
  let sizeStyles = "";

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-secondary text-white font-semibold hover:bg-opacity-90 border-2 border-secondary disabled:opacity-50 disabled:cursor-not-allowed";
      break;
    case "outline":
      variantStyles =
        "bg-transparent text-white font-semibold border-2 border-white hover:bg-white hover:text-primary";
      break;
    case "nav":
      variantStyles = "text-white hover:text-secondary";
      break;
    case "ghost":
      variantStyles = "";
      break;
  }

  switch (size) {
    case "sm":
      sizeStyles = "px-4 py-2 text-sm";
      break;
    case "md":
      sizeStyles = "px-8 py-3";
      break;
    case "lg":
      sizeStyles = "px-8 py-4 text-lg font-bold";
      break;
    case "none":
      sizeStyles = "";
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
