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
      {/* TODO: Sidebar for Darkmode */}
      {isSidebar ? (
        <div className={"flex flex-col items-center gap-2.5 font-medium relative ml-10 mr-6 text-slate-200 dark:text-slate-900 py-2 " + className}>
          <div className="w-full border-b border-slate-300 dark:border-slate-500 py-2 flex items-center justify-center">
            <p className="text-2xl font-header font-extrabold">MENU</p>
          </div>
          <div>
            <ul className="whitespace-pre px-2.5 flex flex-col font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100">
              <li className="py-1 px-3 text-center rounded-md hover:bg-slate-200/30 dark:hover:bg-slate-900/10 transition duration-300">
                <Link href="/loure-illumina" className="font-header font-bold text-sm uppercase" title="Loure Illumina">
                  LOURE ILLUMINA
                </Link>
              </li>
              <li className="py-1 px-3 text-center rounded-md hover:bg-slate-200/30 dark:hover:bg-slate-900/10 transition duration-300">
                <Link href={"/about"} className="font-header font-bold text-sm uppercase" title="About">
                  About
                </Link>
              </li>
              <li className="py-1 px-3 text-center rounded-md hover:bg-slate-200/30 dark:hover:bg-slate-900/10 transition duration-300">
                <Link href={"/team"} className="font-header font-bold text-sm uppercase" title="The Team">
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="border-l-2 border-amber-600/40 hidden md:flex flex-row items-center justify-between text-black gap-1 px-3 sm:px-5 py-3">
          <NavItem
            href={"/loure-illumina"}
            className="px-3 sm:px-5 font-header font-bold"
            paragraphClass="dark:hover:drop-shadow-navitem-slate transition duration-300"
            title="Loure Illumina"
          >
            LOURE ILLUMINA
          </NavItem>
          <NavItem
            href={"/about"}
            className="px-3 sm:px-5 font-header font-bold uppercase"
            paragraphClass="dark:hover:drop-shadow-navitem-slate transition duration-300"
            title="About"
          >
            About
          </NavItem>
          <NavItem
            href={"/team"}
            className="px-3 sm:px-5 font-header font-bold uppercase"
            paragraphClass="dark:hover:drop-shadow-navitem-slate transition duration-300"
            title="Team"
          >
            Team
          </NavItem>
        </div>
      )}
    </>
  );
});

NavItemContainer.displayName = "NavItemContainer";

export default NavItemContainer;
