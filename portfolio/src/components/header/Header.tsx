import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

function Header() {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Kelvin <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
