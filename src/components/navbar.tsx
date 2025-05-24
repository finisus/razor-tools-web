import Link from "next/link";
import * as React from "react";
import { Menu, MenuItem, MenuPopover, MenuTrigger } from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { ThemeToggleWrapper } from "@/components/theme-toggle-wrapper";
import {
  ExclamationIcon,
  MoneyIcon,
  PersonIcon,
  KeyboardDoubleArrowUpIcon,
} from "@/components/icons/isomorphic";
import { HomeIcon } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full flex-row items-center gap-0 border-b bg-background/75 p-2 backdrop-blur-sm">
      <Link href="/">
        <Button variant="outline" size="icon">
          <HomeIcon className="h-[1.2rem] w-[1.2rem]" strokeWidth={1.5} />
        </Button>
      </Link>
      <div className="ml-2 mr-auto flex flex-row items-center justify-center gap-2">
        <MenuTrigger>
          <Button variant="outline" size="sm" className="!text-sm">
            Getting started
          </Button>
          <MenuPopover className="w-80 bg-background/75 p-0 backdrop-blur-sm">
            <Menu className="grid grid-cols-2 gap-3 p-3">
              <MenuItem className="p-0 data-[focused]:bg-secondary/50">
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/10 to-muted/50 p-4 no-underline outline-none focus:shadow-md"
                  href="/#about"
                >
                  <div className="ml-auto">
                    <ExclamationIcon
                      width={64}
                      height={64}
                      fillDark="#26262640"
                      fillLight="#E0E0E040"
                    />
                  </div>
                  <h1 className="mb-0 mt-4 text-start font-serif text-2xl font-medium leading-none tracking-tight">
                    About
                  </h1>
                </Link>
              </MenuItem>
              <MenuItem className="p-0 data-[focused]:bg-secondary/50">
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/10 to-muted/50 p-4 no-underline outline-none focus:shadow-md"
                  href="/#pricing"
                >
                  <div className="ml-auto">
                    <MoneyIcon
                      width={64}
                      height={64}
                      fillDark="#26262640"
                      fillLight="#E0E0E040"
                    />
                  </div>
                  <h1 className="mb-0 mt-4 text-start font-serif text-2xl font-medium leading-none tracking-tight">
                    Pricing
                  </h1>
                </Link>
              </MenuItem>
              <MenuItem className="p-0 data-[focused]:bg-secondary/50">
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/10 to-muted/50 p-4 no-underline outline-none focus:shadow-md"
                  href="/#contact"
                >
                  <div className="ml-auto">
                    <PersonIcon
                      width={64}
                      height={64}
                      fillDark="#26262640"
                      fillLight="#E0E0E040"
                    />
                  </div>
                  <h1 className="mb-0 mt-4 text-start font-serif text-2xl font-medium leading-none tracking-tight">
                    Contact
                  </h1>
                </Link>
              </MenuItem>
              <MenuItem className="p-0 data-[focused]:bg-secondary/50">
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/10 to-primary/50 p-4 no-underline outline-none focus:shadow-md"
                  href="https://app.razortools.finisus.dev/"
                  target="_self"
                >
                  <div className="ml-auto">
                    <KeyboardDoubleArrowUpIcon
                      width={64}
                      height={64}
                      fillDark="#26262640"
                      fillLight="#E0E0E040"
                    />
                  </div>
                  <h1 className="mb-0 mt-4 text-start font-serif text-2xl font-medium leading-none tracking-tight">
                    Launch
                  </h1>
                </Link>
              </MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>

        <Link href="/#features" passHref>
          <Button variant="outline" size="sm" className="!text-sm">
            Features
          </Button>
        </Link>
      </div>
      <div>
        <ThemeToggleWrapper />
      </div>
    </div>
  );
}
