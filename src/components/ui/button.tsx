"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer",
    /* Disabled */
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
    /* Focus Visible */
    "data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring",
    /* Resets */
    "focus-visible:outline-none",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow data-[hovered]:bg-primary/90 data-[pressed]:bg-primary/70",
        destructive:
          "bg-destructive/10 border border-destructive/50 text-destructive-background dark:text-destructive-foreground shadow-sm data-[hovered]:bg-destructive/30 data-[pressed]:bg-destructive/60",
        outline:
          "border border-input bg-background shadow-sm  data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[pressed]:bg-accent/60",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm data-[hovered]:bg-secondary/80 data-[pressed]:bg-secondary/40",
        ghost:
          "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[pressed]:bg-accent/80",
        link: "text-primary underline-offset-4 data-[hovered]:underline data-[pressed]:text-primary/80",
        default_shimmer_hover:
          "relative rounded-md bg-gradient-to-b dark:from-muted dark:to-secondary dark:text-secondary-foreground shadow-sm before:absolute before:inset-0 before:rounded-[inherit] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]   from-slate-200 to-slate-100 text-slate-800 before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] hover:bg-slate-100",
        animate:
          "relative flex animate-[buttonGlowAnim_2s_infinite_linear] cursor-pointer justify-center rounded-[calc(0.7*var(--glowAnimScaling))] border-[calc(0.08*var(--glowAnimScaling))] border-solid border-transparent bg-[linear-gradient(var(--glowAnimBg1),var(--glowAnimBg1)),linear-gradient(var(--glowAnimBg1)_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--glowAnimCol7),var(--glowAnimCol6),var(--glowAnimCol5),var(--glowAnimCol4),var(--glowAnimCol3),var(--glowAnimCol2),var(--glowAnimCol1))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] bg-origin-border px-[calc(1*var(--glowAnimScaling))] py-[calc(0.5*var(--glowAnimScaling))] text-[calc(var(--glowAnimScaling))] backdrop-blur-none before:absolute before:bottom-[-20%] before:-z-10 before:h-[30%] before:w-[60%] before:animate-[buttonGlowAnim_2s_infinite_linear] before:bg-[linear-gradient(90deg,var(--glowAnimCol7),var(--glowAnimCol6),var(--glowAnimCol5),var(--glowAnimCol4),var(--glowAnimCol3),var(--glowAnimCol2),var(--glowAnimCol1))] before:bg-[length:200%] before:blur-[calc(0.8*var(--glowAnimScaling))] before:content-[''] hover:animate-[buttonGlowAnim_0.5s_infinite_linear] hover:before:animate-[buttonGlowAnim_0.5s_infinite_linear]",
      },
      size: {
        icon_sm: "size-8",
        icon: "size-9",
        icon_lg: "size-10",
        xs: "rounded-md px-2 h-7 text-xs",
        sm: "rounded-md px-3 h-8  text-sm",
        default: "rounded-md px-4 h-9 text-sm",
        lg: "rounded-md px-5 h-10 text-base",
        animate: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        ),
      )}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
