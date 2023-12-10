"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { buttonVariants } from "../ui/Button";

const Logo = () => {
  const router = useRouter();

  return (
    <Link href="/loure-illumina" className={"h-12 w-fit" + buttonVariants({ variant: "link" })} title="Loure Illumina Homepage">
      <Image alt="Logo" className="cursor-pointer" height="75" width="50" src="/images/logo/Loure_Illumina_Logo_favicon.png" />
    </Link>
  );
};

export default Logo;
