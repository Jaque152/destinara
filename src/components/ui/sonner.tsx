"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast !rounded-2xl !border-0 !bg-vino !text-blush !shadow-[0_20px_50px_-20px_rgba(34,8,26,0.8)] !font-sans",
          title: "!font-semibold",
          description: "!text-blush/70",
          actionButton: "!rounded-full !bg-lima !text-vino !font-semibold",
          cancelButton: "!rounded-full !bg-blush/10 !text-blush",
          icon: "!text-lima",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
