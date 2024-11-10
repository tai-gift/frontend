import type { Metadata } from "next";
import { fustat, luckiestGuy } from "../../public/fonts";
import SideNav from "@/components/side-nav";
import RightSideBar from "@/components/right-side-bar";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import { DonationProvider } from "@/contexts/DonationProvider";

export const metadata: Metadata = {
  title: "Lottery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
            </main>

            <RightSideBar />
          </section>
          <MobileNav />
        </body>
      </DonationProvider>
    </html>
  );
}
