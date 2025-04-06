"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          href={path}
          className={`${path === pathname && "text-accent border-accent border-b-2"} hover:text-accent font-medium capitalize transition-all`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
