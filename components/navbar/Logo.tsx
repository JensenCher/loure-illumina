"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { buttonVariants } from "../ui/Button";

const Logo = () => {
  const router = useRouter();

  return (
    <Link href="/home" className={"h-12 " + buttonVariants({ variant: "link" })}>
      <Image alt="Logo" className="block dark:hidden" height="100" width="100" src="/images/loure_illumina_logo.png" />
      <Image alt="Logo" className="hidden dark:block cursor-pointer" height="100" width="100" src="/images/loure_illumina_logo_dark.png" />
    </Link>
  );
};

export default Logo;
