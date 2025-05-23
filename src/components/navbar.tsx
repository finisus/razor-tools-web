import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full flex-row items-center gap-0 border-b bg-background/75 p-2 backdrop-blur-sm">
      <div className="pointer-events-none cursor-default touch-none border opacity-0 max-md:hidden">
        <Button disabled variant="ghost" size="icon" className="h-auto">
          <div className="h-0 w-[1.2rem]"></div>
        </Button>
      </div>
      <div className="mx-auto flex flex-row items-center justify-center gap-0 max-md:ml-0">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-sm">
            Home
          </Button>
        </Link>
        <Link href="/#contact">
          <Button variant="ghost" size="sm" className="text-sm">
            Contact
          </Button>
        </Link>
        <Link href="/pricing">
          <Button variant="ghost" size="sm" className="text-sm">
            Pricing
          </Button>
        </Link>
        <Link href="/app">
          <Button variant="ghost" size="sm" className="text-sm">
            Launch App
          </Button>
        </Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
}
