import type { Metadata } from "next";
import { fustat, luckiestGuy } from "../../public/fonts";
import SideNav from "./_components/side-nav";
import RightSideBar from "./_components/right-side-bar";
import "./globals.css";

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
      <body
        className={`${fustat.variable} ${luckiestGuy.variable} font-fustat text-white antialiased`}
      >
        <section className="flex min-h-screen bg-black">
          <SideNav />

          <main className="w-full border-x border-BlackCow lg:w-[596px]">
            {children}
          </main>

          <RightSideBar />
        </section>
      </body>
    </html>
  );
}
