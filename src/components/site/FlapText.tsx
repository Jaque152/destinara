"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789·";

export function FlapText({
  text,
  active = true,
  length,
  className,
  cellClassName,
  speed = 38,
}: {
  text: string;
  active?: boolean;
  length?: number;
  className?: string;
  cellClassName?: string;
  speed?: number;
}) {
  const target = useMemo(() => {
    return (length ? text.toUpperCase().padEnd(length, " ").slice(0, length) : text.toUpperCase()).split("");
  }, [length, text]);

  const [chars, setChars] = useState<string[]>(() => target.map(() => " "));
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!active) return;
    let tick = 0;
    const settle = target.map((c, i) => (c === " " ? 0 : 4 + i * 1.6 + Math.random() * 4));
    
    if (timer.current) clearInterval(timer.current);
    
    timer.current = setInterval(() => {
      tick += 1;
      let done = true;
      setChars(
        target.map((c, i) => {
          if (c === " ") return " ";
          if (tick >= settle[i]) return c;
          done = false;
          return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        }),
      );
      if (done && timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    }, speed);
    
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [active, speed, target]);

  return (
    <span className={cn("inline-flex flex-wrap gap-[3px]", className)} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={cn(
            "flap-cell h-[1.7em] w-[1.15em] font-mono text-[0.95em] font-medium",
            c === " " && "opacity-40",
            cellClassName,
          )}
        >
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}