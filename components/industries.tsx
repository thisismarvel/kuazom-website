import {
  Building2,
  Factory,
  HeartPulse,
  School,
  ShoppingBag,
  Wrench,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const industries = [
  { icon: School, label: 'Schools' },
  { icon: Building2, label: 'Offices' },
  { icon: ShoppingBag, label: 'Shopping Centres' },
  { icon: HeartPulse, label: 'Hospitals' },
  { icon: Factory, label: 'Factories' },
  { icon: Wrench, label: 'Workshops' },
]

export function Industries() {
  return (
    <section id="industries" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Vending wherever people gather"
          description="We install and service smart machines for facilities of every kind across the Greater Toronto Area."
        />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, i) => (
            <Reveal key={industry.label} delay={i * 50}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-tint text-primary">
                  <industry.icon className="size-6" />
                </span>
                <span className="text-sm font-semibold text-card-foreground">
                  {industry.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-base font-medium text-muted-foreground">
          &amp; more facilities across the GTA
        </p>
      </div>
    </section>
  )
}
