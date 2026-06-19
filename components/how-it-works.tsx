import { ClipboardCheck, PackageCheck, PhoneCall, Truck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: PhoneCall,
    title: 'Contact Us',
    description: 'Reach out for a quick, no-pressure conversation.',
  },
  {
    icon: ClipboardCheck,
    title: 'Free Site Assessment',
    description: 'We assess your space and recommend the right machine.',
  },
  {
    icon: PackageCheck,
    title: 'Machine Installed',
    description: 'We deliver and install your smart vending machine.',
  },
  {
    icon: Truck,
    title: 'Ongoing Support',
    description: 'Reliable restocking and responsive servicing.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Up and running in four simple steps"
        />
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 lg:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <step.icon className="size-6" />
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground font-[family-name:var(--font-poppins)]">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
