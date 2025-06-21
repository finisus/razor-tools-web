import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Disclosure,
  DisclosureGroup,
  DisclosureHeader,
  DisclosurePanel,
} from "@/components/ui/disclosure";
import RazorAsciiLazy from "@/components/razor-ascii-lazy";
import { ExclamationIcon, MoneyIcon } from "@/components/icons/isomorphic";

export default function HomePage() {
  return (
    <main className="mt-12 flex min-h-svh w-full flex-col items-stretch justify-start">
      <section className="relative flex h-[75svh] cursor-default flex-col items-center justify-center py-2 select-none">
        <div className="absolute left-1/2 z-10 h-[512px] w-[768px] -translate-x-1/2 -translate-y-8 overflow-hidden max-md:w-[256px]">
          <RazorAsciiLazy />
        </div>
        <h2 className="pointer-events-none relative mt-32 cursor-default text-center font-serif text-4xl font-medium tracking-tight select-none max-md:text-3xl">
          Your personal razor,
          <br />
          <span className="text-3xl max-md:text-2xl">
            that cuts through trenches.
          </span>
          <div className="bg-primary/50 absolute top-1/2 left-1/2 -z-10 hidden h-16 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl max-md:w-52 dark:inline-block"></div>
        </h2>
        <Link href="/buy" className="z-20 mt-8">
          <Button variant="animate" size="animate">
            Purchase Today
          </Button>
        </Link>
      </section>

      <section id="features" className="px-2 py-16 select-none">
        <div className="container mx-auto grid w-[976px] grid-cols-3 grid-rows-2 gap-2 max-lg:w-[736px] max-md:w-full max-md:max-w-80 max-md:grid-flow-row max-md:grid-cols-1 max-md:gap-4">
          <Card className="bg-card flex flex-col justify-between">
            <CardHeader>
              <CardTitle>Volume Simulation & Bump Bot</CardTitle>
              <CardDescription>
                Keep your token active with simulated trading volume or run bump
                bot to push your token to the top at minimal cost.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/temp_grids.png"
                width={670}
                height={428}
                alt="temp1"
                className="h-[200px] rounded-md object-cover"
              ></Image>
            </CardContent>
          </Card>
          <Card className="bg-card flex flex-col justify-between">
            <CardHeader>
              <CardTitle>Shill Comments</CardTitle>
              <CardDescription>
                Post tailored messages on specific pumpfun boards, KOTH/active
                tokens, or all fresh launches.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/temp_grids.png"
                width={670}
                height={428}
                alt="temp1"
                className="h-[200px] rounded-md object-cover"
              ></Image>
            </CardContent>
          </Card>
          <Card className="bg-card flex flex-col justify-between">
            <CardHeader>
              <CardTitle>Vanity Address Generation</CardTitle>
              <CardDescription>
                Generate specialized custom wallets and contract addresses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/temp_grids.png"
                width={670}
                height={428}
                alt="temp1"
                className="h-[200px] rounded-md object-cover"
              ></Image>
            </CardContent>
          </Card>
          <Card className="bg-card flex flex-col justify-between">
            <CardHeader>
              <CardTitle>Bundler Bot</CardTitle>
              <CardDescription>
                Bundle on launch or bundle any token across mutiple sub-wallets
                without triggering platform flags.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/temp_grids.png"
                width={670}
                height={428}
                alt="temp1"
                className="h-[200px] rounded-md object-cover"
              ></Image>
            </CardContent>
          </Card>
          <Card className="border-border col-span-2 flex flex-col justify-between rounded-md border backdrop-blur-xs max-md:col-span-1">
            <CardHeader>
              <CardTitle>Intuitive & Expressive UI</CardTitle>
              <CardDescription>
                Out platform is built by traders and designers for other
                traders. Enjoy a clean and easy-to-use layout that looks good at
                the same time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/temp_grids.png"
                width={670}
                height={428}
                alt="temp1"
                className="h-[200px] rounded-md object-cover"
              ></Image>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="overflow-hidden px-2 py-16 select-none">
        <div className="container mx-auto max-w-80 space-y-4">
          <h2 className="cursor-default text-center font-serif text-4xl font-medium tracking-tight max-md:text-3xl">
            Pricing
          </h2>
          <div className="relative flex flex-row items-center justify-center gap-2 rounded-md">
            <Card className="bg-card/75 backdrop-blur-xs">
              <CardHeader>
                <CardTitle className="text-3xl max-md:text-2xl">
                  1 sol
                </CardTitle>
                <CardDescription>Per month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="opacity-75">
                  <li className="text-xs">Volume Bot</li>
                  <li className="text-xs">Bump Bot</li>
                  <li className="text-xs">Comments Bot</li>
                  <li className="text-xs">Bundler Bot</li>
                  <li className="text-xs">Vanity Address Generator</li>
                  <li className="text-xs">...& much more</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="default"
                  className="bg-transparent"
                >
                  Purchase
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-card/50 dark:bg-card/75 backdrop-blur-xs">
              <CardHeader>
                <CardTitle className="text-3xl max-md:text-2xl">
                  9
                  <sup className="font-normal">
                    <s>12</s>
                  </sup>
                  &nbsp;sol
                </CardTitle>
                <CardDescription>Per year</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="opacity-75">
                  <li className="text-xs">Volume Bot</li>
                  <li className="text-xs">Bump Bot</li>
                  <li className="text-xs">Comments Bot</li>
                  <li className="text-xs">Bundler Bot</li>
                  <li className="text-xs">Vanity Address Generator</li>
                  <li className="text-xs">...& much more</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="animate" size="default">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
            <div className="absolute top-1/2 right-0 -z-10 translate-x-32 -translate-y-1/2 opacity-100">
              <MoneyIcon width={256} height={256} />
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Write a better more original About content */}
      <section id="faq" className="overflow-hidden px-4 py-16 select-none">
        <div className="relative mx-auto max-w-[768px]">
          <Card className="bg-card/50 px-4 py-0 backdrop-blur-xs">
            <DisclosureGroup defaultExpandedKeys={["about"]}>
              <Disclosure id="about">
                <DisclosureHeader>What is RazorTools?</DisclosureHeader>
                <DisclosurePanel>
                  <p>
                    RazorTools is a carefully curated suite of bots smr Pump.fun
                    developers, designed to streamline token launches, wallet
                    management, comment automation, and trading operations. It
                    optimizes workflows with features like sniper bot
                    prevention, bubble map detection bypass, and seamless token
                    transitions to platforms like Raydium—all within an
                    easy-to-use interface.
                  </p>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure id="reach-us">
                <DisclosureHeader>How can I get started?</DisclosureHeader>
                <DisclosurePanel>
                  <p>
                    To get started, you can join our Discord and talk with our
                    team.
                  </p>
                </DisclosurePanel>
              </Disclosure>
            </DisclosureGroup>
          </Card>
          <div className="absolute top-0 right-0 -z-10 translate-x-22 opacity-100">
            <ExclamationIcon width={192} height={192} />
          </div>
        </div>
      </section>
      <section id="contact" className="px-4 py-16 select-none">
        <div className="container mx-auto flex max-w-[640px] flex-col gap-2">
          <div className="mr-auto ml-auto flex w-fit flex-row items-center justify-center gap-3">
            <Link href="https://x.com/finisus" target="_blank">
              <Button variant="secondary" size="sm">
                Twitter
              </Button>
            </Link>
            <Link href="https://x.com/finisus" target="_blank">
              <Button variant="secondary" size="sm">
                Discord
              </Button>
            </Link>
          </div>
          <h4 className="cursor-default text-end font-serif text-2xl font-medium tracking-tight whitespace-nowrap max-md:text-lg">
            ...you can reach us here
          </h4>
        </div>
      </section>
      <section className="mt-auto cursor-default select-none">
        <footer className="flex flex-row items-center justify-between gap-2 px-4 py-1">
          <Link href="https://finisus.dev" target="_blank">
            <span className="text-start font-mono text-xs tracking-wide">
              Made with love, by Finisus
              <span className="ml-1 dark:hidden">🧡</span>
              <span className="ml-1 hidden dark:inline">💛</span>
            </span>
          </Link>
          <span className="text-end text-xs tracking-wide">
            ©&nbsp;
            <span className="font-mono">{new Date().getFullYear()}</span>
          </span>
        </footer>
      </section>
    </main>
  );
}
