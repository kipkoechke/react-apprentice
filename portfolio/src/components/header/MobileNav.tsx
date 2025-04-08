"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-accent text-[32px]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        <div className="mt-32 mb-40 text-center text-2xl">
          <h1 className="text-4xl font-semibold">
            Kelvin <span className="text-accent">.</span>
          </h1>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-accent border-accent border-b-2"
                } hover:text-accent cursor-pointer font-medium capitalize transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
