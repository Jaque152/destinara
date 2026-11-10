"use client";

import { useEffect } from "react";
import { CartProvider } from "@/lib/cart";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Toaster } from "@/components/ui/sonner";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased grain";
  }, []);

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CartDrawer />
        <CookieBanner />
        <Toaster position="bottom-center" />
      </CartProvider>
    </LanguageProvider>
  );
}