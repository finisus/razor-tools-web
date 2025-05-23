import Link from "next/link";
import { Button } from "@/components/ui/button";
import RazorAsciiArt from "@/components/razor-ascii";

export default function Home() {
  return (
    <main className="mt-12 flex min-h-svh w-full flex-col items-stretch justify-start font-sans">
      <section className="relative flex h-[75svh] flex-col items-center justify-center py-2">
        <div className="absolute inset-0 z-10 -translate-y-12">
          <RazorAsciiArt />
        </div>
        <h2 className="pointer-events-none cursor-default select-none text-center font-serif text-4xl font-medium tracking-tight max-md:text-3xl">
          Your personal razor,
          <br />
          <span className="text-3xl max-md:text-2xl">
            that cuts through trenches.
          </span>
        </h2>
      </section>

      <section className="mx-auto grid grid-cols-2 grid-rows-2 gap-4 pb-16">
        <Button variant="default" className="">
          Default button
        </Button>
        <Button variant="secondary" className="">
          Secondary button
        </Button>
        <Button variant="outline" className="">
          Outline button
        </Button>
        <Button variant="link" className="">
          Link button
        </Button>
      </section>

      <section id="about" className="py-2">
        <div className="container ml-auto mr-auto">
          <p className="px-4 text-center text-base font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
            diam euismod, auctor justo sed, fringilla dui. Aliquam gravida
            aliquet magna, sit amet condimentum orci lobortis ut. Morbi feugiat
            mauris vitae facilisis cursus. Duis nulla justo, posuere nec massa
            ut, ornare sollicitudin purus. Sed rutrum mi velit, non vehicula
            risus gravida vel. Sed vel ligula quis enim venenatis ultrices a nec
            enim. Sed vitae nisi aliquet lectus tempor egestas. Aliquam interdum
            tortor eros, non aliquam neque laoreet id. Donec ac sagittis mi, vel
            condimentum urna. Duis ullamcorper odio a mi blandit scelerisque.
            Nunc lobortis leo quis orci ultrices vulputate. Curabitur mattis
            fringilla est, id consectetur risus efficitur hendrerit. Sed ut
            efficitur libero. Vestibulum dui arcu, lobortis vel ante eu, sodales
            dignissim ligula. Suspendisse eget mauris eget orci mollis consequat
            at id dolor. Mauris fringilla ipsum id egestas pellentesque.
          </p>
        </div>
      </section>
      <section id="contact" className="px-4 py-8">
        {/* <div className="ml-auto mr-auto flex w-fit flex-row items-center justify-center gap-3 rounded-xl bg-blush/20 px-3 py-3 backdrop-blur-md"> */}
        <div className="container ml-auto mr-auto flex max-w-[640px] flex-col gap-2">
          <div className="ml-auto mr-auto flex w-fit flex-row items-center justify-center gap-3">
            <Link href="https://github.com/finisus" target="_blank">
              <Button variant="default" size="sm" className="text-sm">
                Github
              </Button>
            </Link>
            <Link href="mailto:finisus@protonmail.com" target="_blank">
              <Button variant="default" size="sm" className="text-sm">
                Email
              </Button>
            </Link>
          </div>
          <h4 className="cursor-default select-none whitespace-nowrap text-end font-serif text-2xl font-medium tracking-tight max-md:text-lg">
            ...you can reach us here
          </h4>
        </div>
      </section>
      <section className="mt-auto cursor-default select-none pt-2">
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
