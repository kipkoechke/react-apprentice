import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>The Wild Oasis. Welcome to Paradise!</h1>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
