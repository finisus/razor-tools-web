"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Button } from "@/components/ui/button";

const ThemeToggle = dynamic(
  () =>
    import("@/components/theme-toggle").then((module) => module.ThemeToggle),
  {
    ssr: false,
    loading: () => (
      <div className="pointer-events-none cursor-default touch-none opacity-0 max-md:hidden">
        <Button isDisabled variant="ghost" size="icon_sm" className="h-0" />
      </div>
    ),
  },
);

export function ThemeToggleLazy() {
  return <ThemeToggle />;
}
