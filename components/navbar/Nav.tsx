// import Link from "next/link";
// import Login from "./Login";
// import { authOptions } from "../../pages/api/auth/[...nextauth]";
// import { getServerSession } from "next-auth/next";

// export default async function Nav() {
//   const session = await getServerSession(authOptions);
//   console.log(session);
//   return (
//     <nav className="flex justify-between items-center py-8">
//       <Link href={"/"}>
//         <h1 className="font-bold text-lg">Send it.</h1>
//       </Link>
//       <ul className="flex items-center gap-6">
//         <Login />
//       </ul>
//     </nav>
//   );
// }

// import { unstable_getServerSession } from "next-auth/next";
// import { authOptions } from "../../../pages/api/auth/[...nextauth]";
// import Login from "../../auth/Login";
// import Link from "next/link";

// export default async function Nav() {
//   // const session = await unstable_getServerSession(authOptions);

//   return (
//     <nav className="flex justify-between items-center py-8 ">
//       <Link href={"/"}>
//         <h1 className="font-bold text-lg">SendIt.</h1>
//       </Link>
//       <ul className="flex items-center gap-6"></ul>
//       {/* <Login /> */}
//       {/* {!session?.user && <Login />}
//       {session?.user && <Logged image={session.user.image || ""} />} */}
//     </nav>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

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
        " w-full z-50 transition duration-300 backdrop-blur-sm top-0 left-0 right-0 border-slate-300 dark:border-slate-700 " // +
        // (navbar ? "dark:bg-white/75 bg-slate-500/75 shadow-sm" : "bg-white/75 dark:bg-slate-900/50 shadow-sm") // +
        // "fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between"
      }
    >
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            {/* <Search /> */}
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}
