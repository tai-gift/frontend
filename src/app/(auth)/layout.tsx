import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "Lottery App | %s ",
    default: "Connect Wallet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="fixed inset-0 z-[99999] w-full bg-Zeus px-4 py-8">
      <Link
        href="/"
        className="text-center font-luckiestGuy text-4xl font-normal uppercase md:text-5xl block"
      >
        LOGO
      </Link>
      <section className="mx-auto w-full max-w-md">{children}</section>
    </main>
  );
}
