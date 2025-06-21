"use client";

import dynamic from "next/dynamic";

const RazorAscii = dynamic(() => import("@/components/razor-ascii"), {
  ssr: false,
});

export default function RazorAsciiLazy() {
  return <RazorAscii />;
}
