"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { Menu, MenuItem, MenuPopover, MenuTrigger } from "@/components/ui/menu";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <MenuTrigger>
      <Button aria-label="Theme Toggle" variant="outline" size="icon">
        <Sun
          strokeWidth={1.5}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          strokeWidth={1.5}
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <MenuPopover className="p-0">
        <Menu className="p-1">
          <MenuItem
            onAction={() => setTheme("light")}
            className={cn(
              theme === "light" && "font-bold text-accent-foreground underline",
            )}
          >
            Light
          </MenuItem>
          <MenuItem
            onAction={() => setTheme("dark")}
            className={cn(
              theme === "dark" && "font-bold text-accent-foreground underline",
            )}
          >
            Dark
          </MenuItem>
          <MenuItem
            onAction={() => setTheme("system")}
            className={cn(
              theme === "system" &&
                "font-bold text-accent-foreground underline",
            )}
          >
            System
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}
