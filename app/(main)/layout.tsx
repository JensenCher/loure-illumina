import "../globals.css";
import Nav from "@/components/navbar/Nav";
import { Roboto } from "@next/font/google";
import ClientOnly from "@/components/ClientOnly";
import ToasterProvider from "../../providers/ToasterProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ariel Rp",
  description: "Ariel Ramsey Poh Art Portfolio",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <ToasterProvider />
      {/* <Modal /> */}
      <div className="relative pb-20 overflow-hidden">{children}</div>
    </>
  );
}
