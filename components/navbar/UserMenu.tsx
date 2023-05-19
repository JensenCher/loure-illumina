"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
// import useRegisterModal from "@/app/hooks/useRegisterModal";
import ThemeToggle from "./ThemeToggle";

const UserMenu = () => {
  // const registerModal = useRegisterModal();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleOpen = useCallback(() => {
  //   setIsOpen((value) => !value);
  // }, []);

  let menuRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   let handler = (e: MouseEvent) => {
  //     if (!menuRef.current) throw Error("divRef is not assigned");

  //     if (e && !menuRef.current.contains(e.target as Node)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <div className="" ref={menuRef}>
      <div className="flex flex-row items-center">
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex flex-row gap-3">
          <ThemeToggle />
        </div>
        {/* <div onClick={() => {}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div> */}
      </div>
      {/* {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
            </>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default UserMenu;
