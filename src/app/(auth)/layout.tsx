import type { Metadata } from "next";

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
    <main className="fixed inset-0 w-full bg-Zeus px-4 py-8 z-[99999]">
      <h1 className="text-center font-luckiestGuy text-4xl font-normal uppercase md:text-5xl">
        LOGO
      </h1>
      <section className="w-full max-w-md mx-auto">{children}</section>
    </main>
  );
}
