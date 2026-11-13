"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart, isoDate } from "@/lib/cart";
import { useLanguage } from "@/context/LanguageContext";

export function PagoFolioView() {
  const { dict } = useLanguage();
  const { addCustomFolio, setOpen } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", folio: "", price: "" });
  const [errors, setErrors] = useState<{ name?: string; folio?: string; price?: string }>({});
  const [status, setStatus] = useState<"idle" | "processing">("idle");

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (form.name.trim().length < 2) e.name = dict.pagoFolio.errors.name;
    if (form.folio.trim().length < 2) e.folio = dict.pagoFolio.errors.folio;
    const priceNum = Number(form.price);
    if (isNaN(priceNum) || priceNum <= 0) e.price = dict.pagoFolio.errors.price;
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("processing");
    
    // Añadimos al carrito como un producto a la medida
    addCustomFolio({
      slug: `folio-${form.folio.toLowerCase()}`,
      folioName: `Folio a la medida: ${form.folio}`,
      customerName: form.name,
      price: Number(form.price),
      date: isoDate(0) // Fecha actual como referencia
    });

    toast.success(dict.pagoFolio.successToast);
    
    // Opcional: Guardar el nombre en localStorage o pasarlo por query params para el Checkout
    if (typeof window !== "undefined") {
      localStorage.setItem("destinara_folio_name", form.name);
    }

    setOpen(true);
    router.push("/carrito");
  };

  return (
    <section className="container pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/contacto"
          className="mb-8 inline-flex items-center gap-2 font-semibold text-vino underline decoration-rosa decoration-2 underline-offset-[6px] hover:text-rosa"
        >
          <ArrowLeft className="h-4 w-4" /> Volver a contacto
        </Link>
        
        <p className="eyebrow text-rosa">{dict.pagoFolio.eyebrow}</p>
        <h1 className="mt-4 text-[clamp(3rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-vino">
          {dict.pagoFolio.title} <em className="font-normal text-rosa">{dict.pagoFolio.titleEm}</em>.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-vino/70">
          {dict.pagoFolio.description}
        </p>

        <form onSubmit={onSubmit} noValidate className="mt-10 rounded-[2rem] bg-white p-8 shadow-[0_30px_60px_-35px_rgba(34,8,26,0.5)] md:p-12">
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="folio-name">{dict.pagoFolio.nameLabel}</Label>
              <Input
                id="folio-name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!errors.name}
                placeholder={dict.pagoFolio.namePlaceholder}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="folio-code">{dict.pagoFolio.folioLabel}</Label>
              <Input
                id="folio-code"
                value={form.folio}
                onChange={(e) => set("folio", e.target.value.toUpperCase())}
                aria-invalid={!!errors.folio}
                placeholder={dict.pagoFolio.folioPlaceholder}
                className="font-mono uppercase"
              />
              {errors.folio && <p className="text-sm text-destructive">{errors.folio}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="folio-price">{dict.pagoFolio.priceLabel}</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-vino/50">$</span>
                <Input
                  id="folio-price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.price}
                  onChange={(e) => set("price", e.target.value)}
                  aria-invalid={!!errors.price}
                  placeholder={dict.pagoFolio.pricePlaceholder}
                  className="pl-8 font-mono"
                />
              </div>
              {errors.price && <p className="text-sm text-destructive">{errors.price}</p>}
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-8 w-full" disabled={status === "processing"}>
            {status === "processing" ? (
              <><Loader2 className="animate-spin" /> {dict.pagoFolio.processing}</>
            ) : (
              <><ShoppingBag /> {dict.pagoFolio.addBtn}</>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}