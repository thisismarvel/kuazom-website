'use client'

import Image from 'next/image'
import {
  Building2,
  Factory,
  HeartPulse,
  Phone,
  School,
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'
import { cn } from '@/lib/utils'

const trustItems = [
  { icon: School, label: 'Schools' },
  { icon: Building2, label: 'Offices' },
  { icon: HeartPulse, label: 'Hospitals' },
  { icon: Factory, label: 'Factories' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 hidden h-[34rem] w-[34rem] rounded-full bg-brand-tint/70 blur-3xl lg:block"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:py-20 lg:px-8">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-4 py-1.5 text-sm font-semibold text-primary">
            Smart Vending • Greater Toronto Area
          </span>
          <h1 className="mt-5 text-pretty text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl font-[family-name:var(--font-poppins)]">
            Smart Vending.{' '}
            <span className="text-primary">Healthier Choices.</span> Greater
            Toronto Area.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            We vend healthy and nutritious snacks and drinks to schools,
            offices, shopping centres, hospitals, factories, and workshops
            across the GTA.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-12 w-full rounded-full px-7 text-base font-semibold sm:w-auto',
              )}
            >
              Request a Free Quote
            </a>
            <a
              href={PHONE_TEL}
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-12 w-full rounded-full border-primary px-7 text-base font-semibold text-primary hover:bg-brand-tint hover:text-primary sm:w-auto',
              )}
            >
              <Phone className="size-4" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium text-muted-foreground">
              Trusted in facilities across the GTA
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              {trustItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-foreground/70"
                >
                  <Icon className="size-5 text-primary" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <Image
            src="/founder-vending.png"
            alt="Kuazom founder presenting a modern touchscreen vending machine stocked with snacks and drinks"
            width={900}
            height={720}
            priority
            className="h-auto w-full max-w-xl object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
