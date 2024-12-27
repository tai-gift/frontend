"use client";
import { navLinks } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoComponent } from "./ui";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky left-0 top-0 hidden h-screen flex-1 lg:block">
      <div className="mb-12 flex items-center justify-self-start pl-[150px] pr-5 pt-12">
        <Link href="/">
          <LogoComponent />
        </Link>
      </div>
      <nav className="flex flex-col items-start justify-start gap-4 pl-[150px] pr-5 pt-4">
        {navLinks.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className={`text-grey- group flex min-h-14 w-full items-center justify-start gap-3 rounded-full px-4 transition-all duration-300 hover:bg-[#F5F5F5A3] ${link.url === pathname ? "bg-[#F5F5F5A3]" : ""}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white ${link.url === pathname ? "bg-primary font-semibold text-white" : "text-grey-300"}`}
            >
              {link.icon}
            </div>
            <span>{link.text}</span>
          </Link>
        ))}
      </nav>
    </nav>
  );
}
