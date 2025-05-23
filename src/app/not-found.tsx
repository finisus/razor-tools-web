import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mt-9 flex min-h-svh w-full flex-col items-center justify-center gap-4 font-sans">
      <h2 className="font-serif text-4xl tracking-tight max-md:text-2xl">
        Not Found
      </h2>
      <span className="text-center text-base italic text-red-500 max-md:text-sm">
        Could not find requested resource
      </span>
      <Link href="/" className="py-4">
        <Button variant="secondary" className="h-auto px-3 py-2 text-sm">
          Return Home
        </Button>
      </Link>
    </main>
  );
}
