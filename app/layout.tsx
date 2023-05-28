import "./globals.css";
import { Roboto, Cinzel, Cinzel_Decorative, Raleway } from "@next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/Footer";
import ScrollToTopButton from "@/ui/ScrollToTopButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto",
});

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
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased font-body vsc-initialized">
        {children}
        {/* <ScrollToTopButton />
        <Footer /> */}
      </body>
    </html>
  );
}

// import "../globals.css";
// import Nav from "@/components/navbar/Nav";
// import { Roboto } from "@next/font/google";
// import ClientOnly from "@/components/ClientOnly";
// import ToasterProvider from "../../providers/ToasterProvider";

// export default function HomeLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <Nav />
//       <ToasterProvider />
//       {/* <Modal /> */}
//       <div className="relative pb-20 overflow-hidden">{children}</div>
//     </>
//   );
// }
