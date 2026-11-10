import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full resize-y rounded-2xl border-[1.5px] border-vino/15 bg-white/70 px-4 py-3 text-base text-vino transition-all duration-200 placeholder:text-vino/35 hover:border-vino/30 focus-visible:border-rosa focus-visible:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rosa/15 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive md:text-[0.95rem]",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
