import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import NavItemContainer from "./NavItemContainer";

interface NavSidebarProps {
  isSidebar: boolean;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const NavSidebar = forwardRef<HTMLDivElement, NavSidebarProps>(({ isSidebar, isOpen, onClick, ...props }, ref) => {
  const sidebar_animation = {
    // System view
    open: {
      width: "16rem",
      x: 0,
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "0",
      x: "100%",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <div>
      <div className={`md:hidden fixed inset-0 h-screen z-[998] bg-black/50 ${isOpen ? "block" : "hidden"}`} onClick={onClick}></div>
      <motion.div
        variants={sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className={cn([
          `${
            isSidebar ? "" : "hidden"
          }  absolute right-0 top-0 bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:hidden transition duration-300`,
        ])}
        ref={ref}
        {...props}
      >
        {/* Close sidebar btn */}
        <div className="absolute w-fit h-fit z-50 left-2 top-2 cursor-pointer text-black" onClick={onClick}>
          <IoIosArrowForward size={25} rotate={90} />
        </div>
        {/* Sidebar Items */}
        <NavItemContainer isSidebar={true} />
      </motion.div>
    </div>
  );
});

NavSidebar.displayName = "NavSidebar";

export default NavSidebar;
