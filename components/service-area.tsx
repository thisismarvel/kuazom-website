import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const cities = [
  'Toronto',
  'Mississauga',
  'Brampton',
  'Vaughan',
  'Markham',
  'Richmond Hill',
  'Oakville',
  'Scarborough',
  'Etobicoke',
  'North York',
  'Pickering',
  'Ajax',
]

export function ServiceArea() {
  return (
    <section className="bg-muted/60 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Area"
          title="Proudly serving the Greater Toronto Area and beyond"
          description="If your facility is in the GTA, we can bring smart, healthy vending to your space."
        />
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3"
              >
                <MapPin className="size-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-card-foreground">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
