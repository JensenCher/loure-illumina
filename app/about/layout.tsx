import "../globals.css";
import ClientOnly from "@/components/ClientOnly";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toast";
import Nav from "@/components/navbar/Nav";
import Footer from "@/components/footer/Footer";
import ScrollToTopButton from "@/ui/ScrollToTopButton";

export const metadata = {
  title: "Loure Illumina | About",
  description: "Experience the magic of tarot through a medieval lens, offering guidance and enchantment.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly>
      <Providers>
        <Toaster position="bottom-right" />
        {/* Allow for more height on Mobile screens */}
        <div className="relative pb-20 overflow-hidden">
          <Nav />
          {children}
        </div>
        <ScrollToTopButton />
        <Footer />
      </Providers>
    </ClientOnly>
  );
}
