import React from "react";

type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AppTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: TitleLevel;
}

export function AppTitle({
  as: Component = "h1",
  className = "",
  children,
  ...props
}: AppTitleProps) {
  return (
    <Component className={`font-bold tracking-tight ${className}`} {...props}>
      {children}
    </Component>
  );
}
