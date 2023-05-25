"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";

export default function Footer() {
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
    <div className={"bg-slate-900 w-fullborder-slate-300 dark:border-slate-700 "}>
      <div className="py-10">
        <Container>
          {/* <div className="flex flex-row items-center justify-between md:gap-0"> */}
          <div className="grid grid-cols-5 gap-3">
            <div className="bg-purple-500 p-3">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <div className="bg-orange-600 p-3">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <div className="bg-orange-600 p-3">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
