import { MoneyIcon } from "@/components/icons/isomorphic/money";

export default function Pricing() {
  return (
    <main className="mt-12 flex min-h-svh w-full flex-col items-stretch justify-start font-sans">
      <section className="flex h-[75svh] flex-col items-center justify-center p-2">
        <div className="relative flex h-48 w-48 items-center justify-center">
          <h2 className="z-50 cursor-default select-none text-center font-serif text-4xl font-medium tracking-tight max-md:text-3xl">
            Pricing
          </h2>
          <div className="absolute left-0 top-0 -z-10 opacity-75 blur-sm">
            <MoneyIcon width={192} height={192} strokeWidth="1px" />
          </div>
        </div>
      </section>
    </main>
  );
}
