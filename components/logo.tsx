import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const textColor = variant === "dark" ? "#1C3022" : "#FFFFFF";
  const subColor = variant === "dark" ? "#3FAD6A" : "#8ED4A8";
  const lineColor = variant === "dark" ? "rgba(30,61,42,0.3)" : "rgba(255,255,255,0.15)";

  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width="164"
        height="56"
        viewBox="0 0 210 74"
        fill="none"
        aria-label="Glowa AI"
      >
        <text
          x="0"
          y="52"
          fontFamily="var(--font-dm-sans), 'DM Sans', sans-serif"
          fontSize="52"
          fontWeight="400"
          fill={textColor}
          letterSpacing="-1"
        >
          Glowa
        </text>
        <rect x="160" y="33" width="34" height="22" rx="5" fill="#3FAD6A" />
        <text
          x="165"
          y="49"
          fontFamily="var(--font-dm-sans), 'DM Sans', sans-serif"
          fontSize="12"
          fontWeight="500"
          fill="#FFFFFF"
          letterSpacing="1.5"
        >
          AI
        </text>
        <rect x="0" y="62" width="194" height="0.5" fill={lineColor} />
        <text
          x="0"
          y="73"
          fontFamily="var(--font-dm-sans), 'DM Sans', sans-serif"
          fontSize="7.5"
          fontWeight="400"
          fill={subColor}
          letterSpacing="2"
        >
          AI-POWERED SKIN INTELLIGENCE
        </text>
      </svg>
    </div>
  );
}
