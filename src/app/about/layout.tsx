import { Metadata } from "next";
import { Footer, Header } from "./misc/components";

export const metadata: Metadata = {
  title: "About Edu-Gift",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="fixed inset-0 z-50 h-dvh w-full overflow-auto bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
