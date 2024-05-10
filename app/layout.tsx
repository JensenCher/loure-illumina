import "./globals.css";
import { Cinzel, Cinzel_Decorative, Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--mainheader-font",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--header-font",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--body-font",
});

export const metadata = {
  title: "Loure Illumina",
  description: "Experience the magic of tarot through a medieval lens, offering guidance and enchantment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("bg-gray-200 text-slate-900 antialiased", cinzel.variable, cinzel_decorative.variable, raleway.variable)}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased font-body vsc-initialized">{children}</body>
    </html>
  );
}
