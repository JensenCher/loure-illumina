import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import NavItem from "./NavItem";
import Link from "next/link";

interface NavItemContainerProps {
  isSidebar: boolean;
  className?: React.ReactNode;
}

const NavItemContainer = forwardRef<HTMLDivElement, NavItemContainerProps>(({ isSidebar, className, ...props }, ref) => {
  return (
    <>
      {isSidebar ? (
        <div className={"flex flex-col items-center gap-2.5 font-medium relative ml-10 text-slate-900 py-2 " + className}>
          <div className="w-full border-b border-slate-300 py-3 flex items-center justify-center">
            <p>Menu</p>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/home">TAROT ANGELUS</Link>
              </li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="border-l-2 border-amber-600/40 hidden md:flex flex-row items-center justify-between text-black gap-3 px-3 sm:px-5 py-3">
          <NavItem className="px-3 sm:px-5 font-header font-bold" paragraphClass="dark:hover:drop-shadow-navitem-slate transition duration-300">
            TAROT ANGELUS
          </NavItem>
          <NavItem className="px-3 sm:px-5 font-header font-bold" paragraphClass="dark:hover:drop-shadow-navitem-slate transition duration-300">
            TAROT ANGELUS
          </NavItem>
          <NavItem className="px-3 sm:px-5 font-header font-bold" paragraphClass="dark:hover:drop-shadow-navitem-slate transition duration-300">
            TAROT ANGELUS
          </NavItem>
          <NavItem className="px-3 sm:px-5 font-header font-bold" paragraphClass="dark:hover:drop-shadow-navitem-slate transition duration-300">
            TAROT ANGELUS
          </NavItem>
        </div>
      )}
    </>
  );
});

NavItemContainer.displayName = "NavItemContainer";

export default NavItemContainer;
