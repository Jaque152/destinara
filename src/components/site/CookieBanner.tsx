"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const KEY = "destinara.cookies.v1";

export function CookieBanner() {
  const { dict } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // storage unavailable
    }
  }, []);

  const save = (value: "all" | "none" | "custom") => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ value, analytics: value === "all" || (value === "custom" && analytics) }));
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={dict.cookie.title}
      className="fixed inset-x-3 bottom-3 z-50 animate-rise sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-md"
    >
      <div className="rounded-3xl bg-vino p-5 text-blush shadow-[0_30px_60px_-20px_rgba(34,8,26,0.7)]">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lima text-vino">
            <Cookie className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold">{dict.cookie.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-blush/70">
              {dict.cookie.text}{" "}
              <Link href="/legal/privacidad" className="underline decoration-rosa underline-offset-4 hover:text-lima">
                {dict.cookie.notice}
              </Link>
            </p>
          </div>
        </div>

        {custom && (
          <div className="mt-4 space-y-2 rounded-2xl bg-blush/5 p-3 text-sm">
            <label className="flex items-center justify-between">
              <span>{dict.cookie.necessary}</span>
              <span className="font-mono text-[0.6rem] uppercase tracking-widest text-lima">{dict.cookie.necessaryActive}</span>
            </label>
            <label className="flex cursor-pointer items-center justify-between">
              <span>{dict.cookie.analytics}</span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="h-4 w-4 accent-[#E6007E]"
              />
            </label>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {custom ? (
            <button
              type="button"
              onClick={() => save("custom")}
              className="h-10 flex-1 rounded-full bg-lima px-4 text-sm font-semibold text-vino hover:bg-blush"
            >
              {dict.cookie.savePreferences}
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setCustom(true)}
                className="h-10 rounded-full px-4 text-sm text-blush/80 hover:text-lima"
              >
                {dict.cookie.customize}
              </button>
              <button
                type="button"
                onClick={() => save("none")}
                className="h-10 rounded-full border border-blush/20 px-4 text-sm hover:border-blush"
              >
                {dict.cookie.reject}
              </button>
              <button
                type="button"
                onClick={() => save("all")}
                className="h-10 flex-1 rounded-full bg-rosa px-4 text-sm font-semibold hover:bg-lima hover:text-vino"
              >
                {dict.cookie.acceptAll}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}