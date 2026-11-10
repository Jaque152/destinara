"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { COUPONS, computeDiscount, getProduct, type Product } from "./products";

export interface CartItem {
  id: string;
  slug: string;
  date: string; // YYYY-MM-DD
  adults: number;
}

export interface CartLine extends CartItem {
  product: Product;
  lineTotal: number;
}

interface CartContextValue {
  items: CartItem[];
  lines: CartLine[];
  count: number;
  travelers: number;
  subtotal: number;
  discount: number;
  total: number;
  coupon: string | null;
  hydrated: boolean;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (slug: string, date: string, adults: number) => void;
  updateAdults: (id: string, adults: number) => void;
  updateDate: (id: string, date: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "destinara.cart.v1";
const COUPON_KEY = "destinara.coupon.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        setItems(parsed.filter((i) => getProduct(i.slug)));
      }
      const c = window.localStorage.getItem(COUPON_KEY);
      if (c && COUPONS[c]) setCoupon(c);
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      if (coupon) window.localStorage.setItem(COUPON_KEY, coupon);
      else window.localStorage.removeItem(COUPON_KEY);
    } catch {
      // ignore
    }
  }, [items, coupon, hydrated]);

  const add = useCallback((slug: string, date: string, adults: number) => {
    const id = `${slug}__${date}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, adults: Math.min(i.adults + adults, 20) } : i));
      }
      return [...prev, { id, slug, date, adults }];
    });
  }, []);

  const updateAdults = useCallback((id: string, adults: number) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id !== id) return i;
        const min = getProduct(i.slug)?.minPeople ?? 1;
        return { ...i, adults: Math.max(min, Math.min(20, adults)) };
      }),
    );
  }, []);

  const updateDate = useCallback((id: string, date: string) => {
    setItems((prev) => {
      const target = prev.find((i) => i.id === id);
      if (!target) return prev;
      const newId = `${target.slug}__${date}`;
      const clash = prev.find((i) => i.id === newId && i.id !== id);
      if (clash) {
        return prev
          .filter((i) => i.id !== id)
          .map((i) => (i.id === newId ? { ...i, adults: Math.min(20, i.adults + target.adults) } : i));
      }
      return prev.map((i) => (i.id === id ? { ...i, id: newId, date } : i));
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = useCallback(() => {
    setItems([]);
    setCoupon(null);
  }, []);

  const applyCoupon = useCallback((code: string) => {
    const normalized = code.trim().toUpperCase();
    if (COUPONS[normalized]) {
      setCoupon(normalized);
      return true;
    }
    return false;
  }, []);

  const removeCoupon = useCallback(() => setCoupon(null), []);

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLine[] = items
      .map((i) => {
        const product = getProduct(i.slug);
        if (!product) return null;
        return { ...i, product, lineTotal: product.price * i.adults };
      })
      .filter((l): l is CartLine => l !== null);
    const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
    const discount = computeDiscount(subtotal, coupon);
    return {
      items,
      lines,
      count: lines.length,
      travelers: lines.reduce((s, l) => s + l.adults, 0),
      subtotal,
      discount,
      total: Math.max(0, subtotal - discount),
      coupon,
      hydrated,
      isOpen,
      setOpen,
      add,
      updateAdults,
      updateDate,
      remove,
      clear,
      applyCoupon,
      removeCoupon,
    };
  }, [items, coupon, hydrated, isOpen, add, updateAdults, updateDate, remove, clear, applyCoupon, removeCoupon]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function isoDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export function formatDateLong(iso: string, lang: string = "es") {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}