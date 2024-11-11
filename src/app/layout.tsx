import type { Metadata } from "next";
import { fustat, luckiestGuy } from "../../public/fonts";
import SideNav from "@/components/side-nav";
import RightSideBar from "@/components/right-side-bar";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import { DonationProvider } from "@/contexts/DonationProvider";
import DonateButton from "@/components/ui/DonateButton";

export const metadata: Metadata = {
  title: "Lottery App",
};

export default function RootLayout({
  children,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  searchParams?: Record<string, string>;
}>) {
  return (
    <html lang="en">
      <DonationProvider>
        <body
          className={`${fustat.variable} ${luckiestGuy.variable} font-fustat text-white antialiased`}
        >
          <section className="flex min-h-screen bg-black pb-20 lg:pb-0">
            <SideNav />

            <main className="w-full border-x border-BlackCow lg:w-[596px]">
              {children}
              <div className="fixed bottom-2 left-1/2 z-10 hidden w-full max-w-[596px] -translate-x-[55%] transform pb-10 lg:block">
                <DonateButton className="mx-auto w-[95%]" />
              </div>
            </main>

            <RightSideBar />
          </section>
          <MobileNav />
        </body>
      </DonationProvider>
    </html>
  );
}
