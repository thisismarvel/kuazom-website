import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-lg bg-background">
              <Image
                src="/kuazom-logo.jpg"
                alt="Kuazom Vending Services logo"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
            </span>
            <span className="text-lg font-bold font-[family-name:var(--font-poppins)]">
              Kuazom Vending Services
            </span>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-background/70">
            We vend healthy and nutritious snacks and drinks across the Greater
            Toronto Area.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60">
            Quick Links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-background/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60">
            Get in Touch
          </h3>
          <a
            href={PHONE_TEL}
            className="mt-4 flex items-center gap-2 font-semibold text-background transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" />
            {PHONE_DISPLAY}
          </a>
          <p className="mt-3 flex items-center gap-2 text-background/80">
            <MapPin className="size-4 text-primary" />
            Greater Toronto Area, Canada
          </p>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-background/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Kuazom Vending Services. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
