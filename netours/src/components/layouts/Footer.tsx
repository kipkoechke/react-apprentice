import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="w-48">
          <Image
            src="/img/logo-green.png"
            alt="Natours logo"
            width={150}
            height={40}
          />
        </div>

        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <Link href="#" className="text-gray-600 hover:text-green-600">
              About us
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-green-600">
              Download apps
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-green-600">
              Become a guide
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-green-600">
              Careers
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </li>
        </ul>

        <p className="text-gray-500 text-sm">
          &copy; by Jonas Schmedtmann. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
