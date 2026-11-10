import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border-[1.5px] border-vino/15 bg-white/70 px-4 py-2 text-base text-vino shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 placeholder:text-vino/35 hover:border-vino/30 focus-visible:border-rosa focus-visible:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rosa/15 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/15 file:border-0 file:bg-transparent file:text-sm file:font-medium md:text-[0.95rem]",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
