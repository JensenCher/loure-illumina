"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import NavItemContainer from "./NavItemContainer";

export default function Nav() {
  // Change Nav color when hover
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY >= 90) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <div
      className={
        "absolute w-full z-50 transition duration-300 backdrop-blur-sm top-0 left-0 right-0 border-slate-300 dark:border-slate-700 " // +
        // (navbar ? "dark:bg-white/75 bg-slate-500/75 shadow-sm" : "bg-white/75 dark:bg-slate-900/50 shadow-sm") // +
        // "fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between"
      }
    >
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between md:gap-0">
            <div className="flex flex-row items-center justify-between gap-5">
              <Logo />
              <NavItemContainer isSidebar={false} />
            </div>
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}
