import Link from "next/link";
import { cn } from "@/lib/utils";

/** Arch portal + rising sun + guiding star: "the destination on the horizon". */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 52" className={cn("h-9 w-auto", className)} aria-hidden="true">
      <path d="M0 52V22C0 9.85 9.85 0 22 0s22 9.85 22 22v30H0z" fill="#E6007E" />
      <path d="M9 52a13 13 0 0 1 26 0z" fill="#D4FF3F" />
      <path
        d="M22 10.5l1.7 4.8 4.8 1.7-4.8 1.7-1.7 4.8-1.7-4.8-4.8-1.7 4.8-1.7z"
        fill="#FFF4F7"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
  showDomain = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  showDomain?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Destinara — inicio"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <LogoMark className="h-8 transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.45rem] font-extrabold tracking-[-0.045em]",
            tone === "dark" ? "text-vino" : "text-blush",
          )}
        >
          destinara
        </span>
        {showDomain && (
          <span
            className={cn(
              "mt-1 font-mono text-[0.55rem] uppercase tracking-[0.2em]",
              tone === "dark" ? "text-vino/50" : "text-blush/50",
            )}
          >
            .com.mx
          </span>
        )}
      </span>
    </Link>
  );
}
