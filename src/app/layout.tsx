import type { Metadata } from "next";
import { fustat, luckiestGuy } from "../../public/fonts";
import SideNav from "@/components/side-nav";
import RightSideBar from "@/components/right-side-bar";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import { DonationProvider } from "@/contexts/DonationProvider";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";

export const metadata: Metadata = {
  title: "Tai.gift",
  description: "Donate to Charities, Win Prizes",
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
      <GoogleTagManager id={"GTM-PRGLKX78"} />
      <DonationProvider>
        <body
          className={`${fustat.variable} ${luckiestGuy.variable} font-fustat text-white antialiased`}
        >
          <section className="flex min-h-screen bg-black pb-32 lg:pb-10">
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
