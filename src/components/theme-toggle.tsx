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
      <Button
        aria-label="Theme Toggle"
        variant="ghost"
        size="icon_sm"
        className="bg-transparent"
      >
        <Sun
          size={16}
          strokeWidth={2.5}
          className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <Moon
          size={16}
          strokeWidth={2.5}
          className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <MenuPopover className="border-border p-0">
        <Menu className="p-1">
          <MenuItem
            onAction={() => setTheme("light")}
            className={cn(
              theme === "light" &&
                "text-accent-foreground font-semibold underline",
            )}
          >
            Light
          </MenuItem>
          <MenuItem
            onAction={() => setTheme("dark")}
            className={cn(
              theme === "dark" &&
                "text-accent-foreground font-semibold underline",
            )}
          >
            Dark
          </MenuItem>
          <MenuItem
            onAction={() => setTheme("system")}
            className={cn(
              theme === "system" &&
                "text-accent-foreground font-semibold underline",
            )}
          >
            System
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}
