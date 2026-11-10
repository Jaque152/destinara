import { cn } from "@/lib/utils";

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-[0.6em] w-[0.6em] shrink-0", className)} aria-hidden="true">
      <path d="M12 1.5l2.6 7.9 7.9 2.6-7.9 2.6-2.6 7.9-2.6-7.9-7.9-2.6 7.9-2.6z" fill="currentColor" />
    </svg>
  );
}

export function Marquee({
  items,
  className,
  tone = "rosa",
}: {
  items: string[];
  className?: string;
  tone?: "rosa" | "lima" | "vino";
}) {
  const row = [...items, ...items];
  const styles = {
    rosa: "bg-rosa text-blush [&_svg]:text-lima",
    lima: "bg-lima text-vino [&_svg]:text-rosa",
    vino: "bg-vino text-blush [&_svg]:text-rosa",
  }[tone];

  return (
    <div className={cn("relative overflow-hidden py-5", styles, className)} aria-hidden="true">
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 text-[clamp(1.8rem,4vw,3.4rem)] font-extrabold tracking-[-0.04em]">
            <span className={i % 2 === 1 ? "font-serif font-normal italic" : ""}>{item}</span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}
