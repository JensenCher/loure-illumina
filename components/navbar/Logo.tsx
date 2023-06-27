"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { buttonVariants } from "../ui/Button";

const Logo = () => {
  const router = useRouter();

  return (
    <Link href="/home" className={"h-12 w-fit" + buttonVariants({ variant: "link" })} title="Loure Illumina Homepage">
      {/* <Image alt="Logo" className="block dark:hidden" height="75" width="75" src="/images/logo.png" />
      <Image alt="Logo" className="hidden dark:block cursor-pointer" height="75" width="75" src="/images/logo.png" /> */}
      <Image alt="Logo" className="cursor-pointer" height="75" width="50" src="/images/logo.png" />
    </Link>
  );
};

export default Logo;
