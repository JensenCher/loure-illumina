import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import NavItemContainer from "./NavItemContainer";
import Boop from "../boop/Boop";

interface NavSidebarProps {
  isSidebar: boolean;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const NavSidebar = forwardRef<HTMLDivElement, NavSidebarProps>(({ isSidebar, isOpen = false, onClick, ...props }, ref) => {
  const sidebar_animation = {
    // System view
    closed: {
      width: "0",
      x: "100%",
      transition: {
        damping: 40,
      },
    },
    open: {
      width: "16rem",
      x: 0,
      transition: {
        damping: 40,
      },
    },
  };

  // Not allow users to scroll when sidebar is open
  isOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  return (
    <div>
      <div className={`md:hidden fixed overscroll-none inset-0 h-[3000px] z-[998] bg-black/50 ${isOpen ? "block" : "hidden"}`} onClick={onClick}></div>
      <motion.div
        variants={sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className={cn([
          `${isSidebar ? "" : "hidden"}  absolute overscroll-none right-0 w-[0] top-0 bg-slate-400 dark:bg-slate-300 text-gray shadow-xl z-[999] max-w-[16rem] h-[105vh] 
            overflow-x-hidden scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-300 md:hidden transition duration-300 rounded-bl-2xl`,
        ])}
        ref={ref}
        {...props}
      >
        {/* Close sidebar btn */}
        <div className="absolute w-fit h-fit z-50 left-2 top-2 cursor-pointer text-black hover:opacity-70 transition duration-300" onClick={onClick}>
          <Boop rotation={10} timing={300}>
            <IoIosArrowForward size={25} rotate={90} title="Close" />
          </Boop>
        </div>
        {/* Sidebar Items */}
        <NavItemContainer isSidebar={true} />
      </motion.div>
    </div>
  );
});

NavSidebar.displayName = "NavSidebar";

export default NavSidebar;
