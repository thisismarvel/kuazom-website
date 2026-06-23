'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Reveal } from '@/components/reveal'
import { EMAIL, EMAIL_LINK, WHATSAPP_LABEL, WHATSAPP_LINK } from '@/lib/site'

const facilityTypes = [
  'School',
  'Office',
  'Shopping Centre',
  'Hospital',
  'Factory',
  'Workshop',
  'Other',
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-brand-tint py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[family-name:var(--font-poppins)]">
            Ready to bring smart, healthy vending to your facility?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Request a free quote or give us a call — we&apos;ll handle the rest.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="size-14 text-primary" />
                  <h3 className="mt-4 text-2xl font-bold text-card-foreground font-[family-name:var(--font-poppins)]">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    We&apos;ve received your request and a member of the Kuazom
                    team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Jane Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="company">Company / Facility</Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        placeholder="Acme Office Tower"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(416) 555-0199"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="facility-type">Facility Type</Label>
                    <Select name="facilityType">
                      <SelectTrigger id="facility-type" className="w-full">
                        <SelectValue placeholder="Select facility type" />
                      </SelectTrigger>
                      <SelectContent>
                        {facilityTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your facility and what you're looking for."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full text-base font-semibold"
                  >
                    Request a Free Quote
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-2xl bg-primary p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)]">
                Prefer to chat?
              </h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/85">
                Message us on WhatsApp and we&apos;ll answer your questions and
                book a free site assessment.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-background px-5 py-4 text-lg font-bold text-primary transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="size-5" />
                  Chat
                </a>
                <a
                  href={EMAIL_LINK}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-background/20 px-5 py-4 text-lg font-bold text-background transition-colors hover:bg-background/30"
                >
                  <Mail className="size-5" />
                  Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
