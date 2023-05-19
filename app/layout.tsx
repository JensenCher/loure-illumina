import "./globals.css";
import { Roboto } from "@next/font/google";
import ClientOnly from "@/components/ClientOnly";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/Toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Loure Illumina",
  description: "Experience the magic of tarot through a medieval lens, offering guidance and enchantment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("bg-gray-200 text-slate-900 antialiased", roboto.variable)}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <ClientOnly>
          <Providers>
            <Toaster position="bottom-right" />
            {children}
          </Providers>
        </ClientOnly>
        {/* Allow for more height on Mobile screens */}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}
