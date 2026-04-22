import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark"
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const textColor = variant === "dark" ? "#0F2318" : "#FFFFFF";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="112"
        height="32"
        viewBox="0 0 240 68"
        fill="none"
        aria-label="Glowa AI"
      >
        <text
          x="0"
          y="52"
          fontFamily="var(--font-fraunces), serif"
          fontSize="54"
          fontWeight="400"
          fill={textColor}
          letterSpacing="-2"
          fontStyle="italic"
        >
          Glowa
        </text>
        <rect x="175" y="28" width="40" height="24" rx="6" fill="#5DB87A" />
        <text
          x="181"
          y="45"
          fontFamily="var(--font-inter), sans-serif"
          fontSize="13"
          fontWeight="600"
          fill="#FFFFFF"
          letterSpacing="1.8"
        >
          AI
        </text>
      </svg>
    </div>
  );
}
