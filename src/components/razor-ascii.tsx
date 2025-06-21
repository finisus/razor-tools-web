"use client";

import { motion } from "framer-motion";
import ASCIIText from "@/components/ui/ascii-animation";

export default function RazorAscii() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "backInOut" }}
    >
      <ASCIIText
        text={`/`}
        asciiFontSize={3}
        textFontSize={99}
        textColor="#ffffff"
        planeBaseHeight={18}
        enableWaves={false}
      />
    </motion.div>
  );
}
