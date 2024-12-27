import type { Metadata } from "next";
import { fustat, luckiestGuy } from "../../public/fonts";
import SideNav from "@/components/side-nav";
import RightSideBar from "@/components/right-side-bar";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import { AccountProvider } from "@/contexts/AccountProvider";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import { AppApolloProvider } from "@/contexts/AppApolloProvider";
import { AppRainbowKitProvider } from "@/contexts/wagmi";
import { headers } from "next/headers";
import React from "react";
import { DrawProvider } from "@/contexts/DrawProvider";

export const metadata: Metadata = {
  title: "Edu-Chain",
  description: "Donate to Charities, Win Prizes",
};

export default async function RootLayout({
  children,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  searchParams?: Record<string, string>;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.variable} ${luckiestGuy.variable} font-fustat text-black antialiased`}
      >
        <GoogleTagManager id={"GTM-PRGLKX78"} />

        <AppApolloProvider>
          <AppRainbowKitProvider cookie={(await headers()).get("cookie")}>
            <AccountProvider>
              <DrawProvider>
                <section className="flex min-h-screen bg-white pb-32 lg:pb-10">
                  <SideNav />

                  <main className="w-full border-x border-grey-400 lg:w-[596px]">
                    {children}
                  </main>

                  <RightSideBar />
                </section>
                <MobileNav searchParams={searchParams} />
              </DrawProvider>
            </AccountProvider>
          </AppRainbowKitProvider>
        </AppApolloProvider>
      </body>
    </html>
  );
}
