"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster, ToasterProps } from "sonner";
import { LoaderCircleIcon, CheckIcon, InfoIcon, XIcon } from "lucide-react";

const ThemedToaster = (props: ToasterProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toaster
      containerAriaLabel="toast-notification"
      position="bottom-center"
      expand={false}
      visibleToasts={3}
      closeButton={false}
      offset={32}
      mobileOffset={24}
      gap={12}
      duration={4000}
      toastOptions={{
        style: {
          background: "var(--background)/0.75",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          paddingTop: "10px",
          paddingBottom: "12px",
          paddingLeft: "12px",
          paddingRight: "12px",
          fontSize: 14,
          fontFamily: "var(--font-spline-mono)",
          fontWeight: "400",
          color: "var(--foreground)",
        },
      }}
      icons={{
        loading: (
          <div className="ml-1">
            <LoaderCircleIcon
              size={16}
              strokeWidth={2.5}
              className="animate-spin"
              color="var(--foreground)"
            />
          </div>
        ),
        success: (
          <div className="ml-1">
            <CheckIcon
              size={16}
              strokeWidth={2.5}
              className="transition-all ease-in-out"
              color="var(--secondary-foreground)"
            />
          </div>
        ),
        info: (
          <div className="ml-1">
            <InfoIcon
              size={16}
              strokeWidth={2.5}
              className="transition-all ease-in-out"
              color="var(--foreground)"
            />
          </div>
        ),
        error: (
          <div className="ml-1">
            <XIcon
              size={16}
              strokeWidth={2.5}
              className="transition-all ease-in-out"
              color="var(--destructive)"
            />
          </div>
        ),
      }}
      {...props}
    />
  );
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
      <ThemedToaster />
    </ThemeProvider>
  );
}
