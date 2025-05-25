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
import RazorAsciiArt from "@/components/razor-ascii";
import { ExclamationIcon, MoneyIcon } from "@/components/icons/isomorphic";

export default function Home() {
  return (
    <main className="mt-12 flex min-h-svh w-full flex-col items-stretch justify-start font-sans">
      <section className="relative flex h-[75svh] select-none flex-col items-center justify-center py-2">
        <div className="absolute inset-0 z-10 -translate-y-8">
          <RazorAsciiArt />
        </div>
        <h2 className="pointer-events-none relative mt-32 cursor-default select-none text-center font-serif text-4xl font-medium tracking-tight max-md:text-3xl">
          Your personal razor,
          <br />
          <span className="text-3xl max-md:text-2xl">
            that cuts through trenches.
          </span>
          <div className="absolute left-1/2 top-1/2 -z-10 hidden h-16 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 blur-3xl max-md:w-52 dark:inline-block"></div>
        </h2>
        <Link href="/store" className="z-20 mt-8">
          <Button
            variant="secondary"
            size="default"
            className="relative border dark:animate-gradientBorder dark:border-transparent dark:[background:linear-gradient(45deg,hsl(var(--secondary)),hsl(var(--secondary))_50%,hsl(var(--secondary)))_padding-box,conic-gradient(from_var(--gradient-border-angle),hsl(var(--secondary))_80%,_hsl(var(--primary)/0.75)_86%,_hsl(var(--primary))_90%,_hsl(var(--primary)/0.75)_94%,_hsl(var(--primary)/0.48))_border-box]"
          >
            Purchase Today
          </Button>
        </Link>
      </section>

      <section id="features" className="select-none px-2 py-16">
        <div className="container mx-auto grid w-[976px] grid-cols-3 grid-rows-2 gap-2 max-lg:w-[736px] max-md:w-full max-md:max-w-80 max-md:grid-flow-row max-md:grid-cols-1 max-md:gap-4">
          <Card className="flex flex-col justify-between bg-card">
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
          <Card className="flex flex-col justify-between bg-card">
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
          <Card className="flex flex-col justify-between bg-card">
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
          <Card className="flex flex-col justify-between bg-card">
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
          <Card className="relative col-span-2 flex flex-col justify-between rounded-2xl border backdrop-blur-md max-md:col-span-1 dark:animate-gradientBorder dark:border-transparent dark:[background:linear-gradient(45deg,hsl(var(--card)),hsl(var(--card))_50%,hsl(var(--card)))_padding-box,conic-gradient(from_var(--gradient-border-angle),hsl(var(--border))_80%,_hsl(var(--primary)/0.75)_86%,_hsl(var(--primary))_90%,_hsl(var(--primary)/0.75)_94%,_hsl(var(--primary)/0.48))_border-box]">
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

      <section id="pricing" className="select-none px-2 py-16">
        <div className="container mx-auto max-w-80 space-y-4">
          <h2 className="cursor-default text-center font-serif text-4xl font-medium tracking-tight max-md:text-3xl">
            Pricing
          </h2>
          <div className="relative flex flex-row items-center justify-center gap-2 overflow-hidden rounded-xl">
            <Card className="bg-card/75 backdrop-blur-sm">
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
            <Card className="bg-card/50 backdrop-blur-sm dark:bg-card/75">
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
                <Button
                  variant="secondary"
                  size="default"
                  className="relative border dark:animate-gradientBorder dark:border-transparent dark:[background:linear-gradient(45deg,hsl(var(--secondary)),hsl(var(--secondary))_50%,hsl(var(--secondary)))_padding-box,conic-gradient(from_var(--gradient-border-angle),hsl(var(--secondary))_80%,_hsl(var(--primary)/0.75)_86%,_hsl(var(--primary))_90%,_hsl(var(--primary)/0.75)_94%,_hsl(var(--primary)/0.48))_border-box]"
                >
                  Purchase
                </Button>
              </CardFooter>
            </Card>
            <div className="absolute right-0 top-1/2 -z-10 -translate-y-1/2 translate-x-32 opacity-100">
              <MoneyIcon width={256} height={256} />
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Write a better more original About content */}
      <section id="faq" className="select-none px-2 py-16">
        <div className="container mx-auto">
          <div className="relative mx-auto max-w-[768px] overflow-hidden rounded-xl max-md:w-80">
            <Card className="bg-card/50 px-4 py-0 backdrop-blur-sm dark:bg-card/75">
              <DisclosureGroup defaultExpandedKeys={["about"]}>
                <Disclosure id="about">
                  <DisclosureHeader>What is RazorTools?</DisclosureHeader>
                  <DisclosurePanel>
                    <p className="opacity-90">
                      RazorTools is a carefully curated suite of bots for
                      Pump.fun developers, designed to streamline token
                      launches, wallet management, comment automation, and
                      trading operations. It optimizes workflows with features
                      like sniper bot prevention, bubble map detection bypass,
                      and seamless token transitions to platforms like
                      Raydium—all within an easy-to-use interface.
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
            <div className="absolute right-0 top-0 -z-10 translate-x-20 opacity-100">
              <ExclamationIcon width={192} height={192} />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="select-none px-2 py-16">
        <div className="container mx-auto flex max-w-[640px] flex-col gap-2">
          <div className="ml-auto mr-auto flex w-fit flex-row items-center justify-center gap-3">
            <Link href="" target="_blank">
              <Button variant="secondary" size="sm" className="text-sm">
                Twitter
              </Button>
            </Link>
            <Link href="" target="_blank">
              <Button variant="secondary" size="sm" className="text-sm">
                Discord
              </Button>
            </Link>
          </div>
          <h4 className="cursor-default whitespace-nowrap text-end font-serif text-2xl font-medium tracking-tight max-md:text-lg">
            ...you can reach us here
          </h4>
        </div>
      </section>
      <section className="mt-auto cursor-default select-none">
        <footer className="flex flex-row items-center justify-between gap-2 px-4 py-2">
          <Link href="https://finisus.dev" target="_blank">
            <span className="text-center text-xs font-medium">
              Made with love, by Finisus
              <span className="ml-1 dark:hidden">🧡</span>
              <span className="ml-1 hidden dark:inline">💛</span>
            </span>
          </Link>
          <span className="text-start text-xs font-medium">© 2025</span>
        </footer>
      </section>
    </main>
  );
}
