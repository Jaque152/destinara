"use client";

import { useState } from "react";
import { Check, Loader2, Lock, Send } from "lucide-react";
import Link from 'next/link';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";

type Field = "name" | "email" | "phone" | "interest" | "message" | "privacy";

export function ContactForm({ preset }: { preset?: string }) {
  const { lang, dict } = useLanguage();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    interest: preset ?? "",
    message: "",
    website: "",
  });
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: keyof typeof values, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k as Field]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (values.name.trim().length < 2) e.name = dict.contactView.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = dict.contactView.errors.email;
    if (values.phone && values.phone.replace(/\D/g, "").length < 10) e.phone = dict.contactView.errors.phone;
    if (!values.interest) e.interest = dict.contactView.errors.interest;
    if (values.message.trim().length < 10) e.message = dict.contactView.errors.message;
    if (!privacy) e.privacy = dict.contactView.errors.privacy;
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, lang }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.error ?? "Revisa los campos marcados.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      toast.error("No pudimos enviar tu mensaje", {
        description: err instanceof Error ? err.message : "Intenta de nuevo.",
      });
    }
  };

  if (status === "sent") {
    return (
      <div className="ticket relative overflow-hidden rounded-[2rem] bg-white p-8 md:p-12 [--notch-y:70%]">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-lima">
          <Check className="h-8 w-8 text-vino" strokeWidth={3} />
        </div>
        <h3 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-vino">
          {dict.contactView.receivedTitle} <em className="font-normal text-rosa">{dict.contactView.receivedTitleEm}</em>.
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-vino/70">
          {dict.contactView.receivedMessagePrefix} {values.name.split(" ")[0]}{dict.contactView.receivedMessageMiddle}{" "}
          <strong className="text-vino">{values.email}</strong> {dict.contactView.receivedMessageSuffix}
        </p>
        <div className="my-8 text-vino/15">
          <div className="perforation" />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4">
          <Button
            variant="outline"
            onClick={() => {
              setValues({ name: "", email: "", phone: "", interest: "", message: "", website: "" });
              setPrivacy(false);
              setStatus("idle");
            }}
          >
            {dict.contactView.sendAnother}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[2rem] bg-white p-6 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-name">{dict.contactView.nameLabel}</Label>
          <Input
            id="c-name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            placeholder={dict.contactView.namePlaceholder}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email">{dict.contactView.emailLabel}</Label>
          <Input
            id="c-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            placeholder={dict.contactView.emailPlaceholder}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-phone">{dict.contactView.phoneLabel}</Label>
          <Input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value.replace(/[^\d\s+()-]/g, ""))}
            aria-invalid={!!errors.phone}
            placeholder={dict.contactView.phonePlaceholder}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-interest">{dict.contactView.interestLabel}</Label>
          <Select value={values.interest} onValueChange={(v) => set("interest", v)}>
            <SelectTrigger id="c-interest" aria-invalid={!!errors.interest}>
              <SelectValue placeholder={dict.contactView.interestPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {dict.contactView.interests.map((i) => (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.interest && <p className="text-sm text-destructive">{errors.interest}</p>}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <div className="flex items-baseline justify-between">
            <Label htmlFor="c-message">{dict.contactView.messageLabel}</Label>
            <span className="font-mono text-[0.6rem] text-vino/40">{values.message.length}/1500</span>
          </div>
          <Textarea
            id="c-message"
            value={values.message}
            maxLength={1500}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={!!errors.message}
            placeholder={dict.contactView.messagePlaceholder}
            className="min-h-[170px]"
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
        </div>
        {/* honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set("website", e.target.value)}
          className="hidden"
          aria-hidden="true"
        />
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3">
            <Checkbox
              checked={privacy}
              onCheckedChange={(v) => {
                setPrivacy(v === true);
                if (errors.privacy) setErrors((e) => ({ ...e, privacy: undefined }));
              }}
              aria-invalid={!!errors.privacy}
              className="mt-0.5"
            />
            <span className="text-sm leading-relaxed text-vino/75">
              {dict.contactView.privacyPrefix}{" "}
              <Link href="/legal/privacidad/" className="font-semibold text-vino underline decoration-rosa underline-offset-4">
                {dict.contactView.privacyLink}
              </Link>
              {dict.contactView.privacySuffix}
            </span>
          </label>
          {errors.privacy && <p className="mt-2 pl-8 text-sm text-destructive">{errors.privacy}</p>}
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="flex items-center gap-2 text-xs text-vino/50">
          <Lock className="h-3.5 w-3.5" /> {dict.contactView.confidentialityNote}
        </p>
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" /> {dict.contactView.sending}
            </>
          ) : (
            <>
              {dict.contactView.sendBtn} <Send />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}