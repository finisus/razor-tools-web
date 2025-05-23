import ASCIIText from "@/components/ui/ascii-animation";

export default function RazorAsciiArt() {
  return (
    <ASCIIText
      text={`/`}
      asciiFontSize={4}
      textFontSize={96}
      textColor="#ffffff"
      planeBaseHeight={12}
      enableWaves={false}
    />
  );
}
