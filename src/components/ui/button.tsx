import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa focus-visible:ring-offset-2 focus-visible:ring-offset-blush disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-rosa text-blush shadow-[0_8px_24px_-10px_rgba(230,0,126,0.7)] hover:bg-vino hover:shadow-[0_10px_30px_-12px_rgba(34,8,26,0.6)]",
        dark: "bg-vino text-blush hover:bg-rosa",
        lima: "bg-lima text-vino hover:bg-blush",
        light: "bg-blush text-vino hover:bg-lima",
        outline:
          "border-[1.5px] border-vino/80 bg-transparent text-vino hover:bg-vino hover:text-blush",
        "outline-light":
          "border-[1.5px] border-blush/40 bg-transparent text-blush hover:border-lima hover:bg-lima hover:text-vino",
        ghost: "text-vino hover:bg-rosa-100",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "rounded-none px-0 text-vino underline decoration-rosa decoration-2 underline-offset-[6px] hover:text-rosa",
      },
      size: {
        default: "h-11 px-6 text-[0.95rem]",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
