import {
  CreditCard,
  Leaf,
  MonitorSmartphone,
  Truck,
  Tv,
  Wallet,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const features = [
  {
    icon: CreditCard,
    title: 'Smart Pay Enabled',
    description: 'Tap-to-pay with credit & debit cards — no cash required.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Touchscreen Machines',
    description: 'Modern, intuitive, fast interface your people will love.',
  },
  {
    icon: Tv,
    title: 'Advert-Enabled Screens',
    description: 'On-machine advertising opportunities for your facility.',
  },
  {
    icon: Leaf,
    title: 'Healthy & Nutritious',
    description: 'Curated snacks and drinks — not junk food.',
  },
  {
    icon: Truck,
    title: 'Prompt, Reliable Service',
    description: 'Fast restocking and responsive, friendly support.',
  },
  {
    icon: Wallet,
    title: 'No Cost to Your Facility',
    description: 'Installation and servicing at no cost to qualifying sites.',
  },
]

export function WhyKuazom() {
  return (
    <section id="why-us" className="bg-muted/60 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Kuazom"
          title="Smart vending built for modern facilities"
          description="Everything you expect from a premium vending partner — convenient, cashless, and genuinely healthy."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-tint text-primary">
                  <feature.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-card-foreground font-[family-name:var(--font-poppins)]">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
