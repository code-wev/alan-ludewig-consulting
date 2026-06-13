import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container = ({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cn("w-full max-w-[1760px] mx-auto px-5 md:px-20", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
