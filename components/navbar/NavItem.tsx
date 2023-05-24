"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
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
  href: Url;
}

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(({ className, size, paragraphClass, href, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn(navItemVariants({ size, className }))}>
      <Link href={href} className={paragraphClass}>
        {children}
      </Link>
    </div>
  );
});

NavItem.displayName = "Nav Item";

export default NavItem;
