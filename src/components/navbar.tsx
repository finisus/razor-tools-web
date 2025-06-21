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
    <div className="bg-background/75 border-border fixed top-0 left-0 z-50 flex w-full flex-row items-center gap-0 border-b-[0px] px-2 py-0 backdrop-blur-xs">
      <Link href="/">
        <Button variant="ghost" size="icon_sm" className="bg-transparent">
          <HomeIcon size={14} strokeWidth={2.5} />
        </Button>
      </Link>
      <div className="mr-auto flex flex-row items-center justify-center gap-0">
        <MenuTrigger>
          <Button variant="ghost" size="sm" className="bg-transparent">
            Getting started
          </Button>
          <MenuPopover className="bg-background/75 border-border w-80 p-0 backdrop-blur-xs">
            <Menu className="grid grid-cols-2 gap-3 p-3">
              <MenuItem className="data-[focused]:bg-secondary/50 p-0">
                <Link
                  className="from-muted/10 to-muted/50 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-none select-none focus:shadow-md"
                  href="/#pricing"
                >
                  <div className="ml-auto">
                    <MoneyIcon
                      width={64}
                      height={64}
                      fillDark="#26262640"
                      fillLight="#E0E0E040"
                      strokeDark="#E0E0E080"
                      strokeLight="#26262680"
                      strokeWidth={2}
                    />
                  </div>
                  <h1 className="mt-4 mb-0 text-start font-serif text-2xl leading-none font-medium tracking-tight">
                    Pricing
                  </h1>
                </Link>
              </MenuItem>
              <MenuItem className="data-[focused]:bg-secondary/50 p-0">
                <Link
                  className="from-muted/10 to-muted/50 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-none select-none focus:shadow-md"
                  href="/#faq"
                >
                  <div className="ml-auto">
                    <ExclamationIcon
                      width={64}
                      height={64}
                      fillDark="#26262640"
                      fillLight="#E0E0E040"
                      strokeDark="#E0E0E080"
                      strokeLight="#26262680"
                      strokeWidth={2}
                    />
                  </div>
                  <h1 className="mt-4 mb-0 text-start font-serif text-2xl leading-none font-medium tracking-tight">
                    FAQ
                  </h1>
                </Link>
              </MenuItem>
              <MenuItem className="data-[focused]:bg-secondary/50 p-0">
                <Link
                  className="from-muted/10 to-muted/50 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-none select-none focus:shadow-md"
                  href="/#contact"
                >
                  <div className="ml-auto">
                    <PersonIcon
                      width={64}
                      height={64}
                      fillDark="#26262640"
                      fillLight="#E0E0E040"
                      strokeDark="#E0E0E080"
                      strokeLight="#26262680"
                      strokeWidth={2}
                    />
                  </div>
                  <h1 className="mt-4 mb-0 text-start font-serif text-2xl leading-none font-medium tracking-tight">
                    Contact
                  </h1>
                </Link>
              </MenuItem>
              <MenuItem className="data-[focused]:bg-secondary/50 p-0">
                <Link
                  className="from-muted/10 to-primary/50 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-none select-none focus:shadow-md"
                  href="https://app.razortools.finisus.dev/"
                  target="_self"
                >
                  <div className="ml-auto">
                    <KeyboardDoubleArrowUpIcon
                      width={64}
                      height={64}
                      fillDark="#26262640"
                      fillLight="#E0E0E040"
                      strokeDark="#E0E0E080"
                      strokeLight="#26262680"
                      strokeWidth={2}
                    />
                  </div>
                  <h1 className="mt-4 mb-0 text-start font-serif text-2xl leading-none font-medium tracking-tight">
                    Launch
                  </h1>
                </Link>
              </MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>

        <Link href="/#features" passHref>
          <Button variant="ghost" size="sm" className="bg-transparent">
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
