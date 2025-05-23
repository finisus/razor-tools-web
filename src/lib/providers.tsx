"use client";

import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/utils/get-query-client";
import { ThemeProvider, useTheme } from "next-themes";
import { Toaster, ToasterProps } from "react-hot-toast";

const ThemedToaster = (props: ToasterProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={12}
      containerStyle={{ fontSize: "15px" }}
      toastOptions={{
        // Global default opts
        className: "",
        duration: 5000,
        removeDelay: 1000,
        style: {
          maxWidth: "256px",
          background: `${isDark ? "#ecd6c633" : "#26262633"}`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "12px",
          border: `1px solid ${isDark ? "#ecd6c633" : "#26262633"}`,
          paddingTop: "3px",
          paddingBottom: "3px",
          paddingLeft: "15px",
          paddingRight: "15px",
          fontFamily: "var(--font-figtree-sans)",
          fontWeight: "500",
          color: `${isDark ? "#ecd6c6" : "#262626"}`,
        },
        // Default opts for specific types (success, error, loading, custom)
        success: {
          duration: 3000,
          icon: "✅",
        },
        error: {
          icon: "‼️",
        },
      }}
      {...props}
    />
  );
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="data-mode" defaultTheme="system" enableSystem>
        {children}
        <ReactQueryDevtools />
        <ThemedToaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
