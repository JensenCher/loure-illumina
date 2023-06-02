"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
// import useRegisterModal from "@/app/hooks/useRegisterModal";
import ThemeToggle from "./ThemeToggle";
import NavSidebar from "./NavSidebar";
import Icons from "../Icons";
import Button from "@/ui/Button";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="" ref={menuRef}>
      <div className="flex flex-row items-center">
        {/* When mobile screen */}
        <div className="md:hidden flex flex-row items-center justify-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title="Menu"
          >
            <Icons.Menu className="scale-100 transition-all text-slate-900 hover:scale-110 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
          </Button>
        </div>
        {/* When large screens */}
        <div className="hidden md:flex flex-row gap-3">
          <ThemeToggle />
        </div>
        <NavSidebar
          isSidebar={true}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default UserMenu;
