"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/utils/constant";


export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky left-0 top-0 hidden h-screen flex-1 lg:block">
      <div className="pl-[150px] pt-8">
        <h2 className="font-luckiestGuy text-[2.75rem]">LOGO</h2>
      </div>
      <nav className="flex flex-col items-start justify-start gap-4 pl-[150px] pr-5 pt-4">
        {navLinks.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className={`group flex min-h-14 w-full items-center justify-start gap-3 rounded-full px-4 transition-all duration-300 hover:bg-FuscousGrey-100/60 ${link.url === pathname ? "bg-FuscousGrey-100/60" : ""}`}
          >
            <div
              className={`group-hover:bg-activeBgLinear flex h-10 w-10 items-center justify-center rounded-full ${link.url === pathname ? "bg-activeBgLinear" : ""}`}
            >
              <Image src={link.icon} alt="sidebar icon" />
            </div>
            <span>{link.text}</span>
          </Link>
        ))}
      </nav>
    </nav>
  );
}
