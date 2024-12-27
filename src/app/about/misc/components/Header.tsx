import { LogoComponent } from "@/components/ui";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <nav
          aria-label="navigations"
          className="flex min-h-20 w-full items-center justify-between gap-4 py-4"
        >
          <Link href="/">
            <LogoComponent />
          </Link>
          <nav aria-label="navigating" className="hidden md:flex items-center gap-12">
            <Link href="#" className="text-base font-medium text-[#28292A] hover:text-primary">
              Donate
            </Link>
            <Link href="#" className="text-base font-medium text-[#28292A] hover:text-primary">
              Impact
            </Link>
          </nav>
          <button type="button" className="min-h-10 w-fit rounded-full bg-primary py-3 px-6 md:px-10 text-sm font-semibold text-white outline-none transition-all duration-300 hover:opacity-90">Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
