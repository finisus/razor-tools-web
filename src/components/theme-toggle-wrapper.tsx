"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Button } from "@/components/ui/button";

const DynamicThemeToggle = dynamic(
  () => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => (
      <div className="pointer-events-none cursor-default touch-none opacity-0 max-md:hidden">
        <Button isDisabled variant="ghost" size="icon" className="h-auto">
          <div className="h-0 w-[1.2rem]"></div>
        </Button>
      </div>
    ),
  },
);

export function ThemeToggleWrapper() {
  return <DynamicThemeToggle />;
}
