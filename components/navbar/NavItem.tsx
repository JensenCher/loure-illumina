"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const navItemVariants = cva("dark:text-slate-300 text-center nav-item", {
  variants: {
    size: {
      default: "text-base sm-text-lg",
      sm: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface NavItemProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof navItemVariants> {
  paragraphClass?: string;
}

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(({ className, size, paragraphClass, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn(navItemVariants({ size, className }))}>
      <p className={paragraphClass}>{children}</p>
    </div>
  );
});

export default NavItem;
