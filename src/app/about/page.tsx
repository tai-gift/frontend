"use client";
import { useEffect } from "react";
import {
  Donation,
  Hero,
  How,
  Stories,
  Why,
  Win,
} from "./misc/components/sections";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/about") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [pathname]);

  return (
    <section className="w-full">
      <Hero />
      <Why />
      <How />
      <Donation />
      <Stories />
      <Win />
    </section>
  );
}
