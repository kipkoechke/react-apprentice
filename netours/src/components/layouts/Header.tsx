import Image from "next/image";
import Link from "next/link";
import SearchForm from "../ui/SearchForm";

export default function Header() {
  // Sample user data - in a real app this would come from auth context
  const user = { name: "Jonas", photo: "/img/user.jpg" };

  return (
    <header className="bg-gradient-to-br from-green-500 to-green-600 py-4 px-6 flex justify-between items-center">
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-white font-bold hover:text-green-200">
          All tours
        </Link>
        <SearchForm />
      </nav>

      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/img/logo-white.png"
            alt="Natours logo"
            width={120}
            height={35}
          />
        </Link>
      </div>

      <nav className="flex items-center space-x-4">
        <Link href="/my-bookings" className="text-white hover:text-green-200">
          My bookings
        </Link>

        {user ? (
          <>
            <button className="text-white hover:text-green-200">Log out</button>
            <Link
              href="/account"
              className="flex items-center space-x-2 text-white hover:text-green-200"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={user.photo}
                  alt="User photo"
                  width={32}
                  height={32}
                />
              </div>
              <span>{user.name}</span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" className="text-white hover:text-green-200">
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-white text-green-600 py-2 px-4 rounded-full font-semibold hover:bg-green-100"
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
