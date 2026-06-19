'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, MessageCircle, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { NAV_LINKS, WHATSAPP_LABEL, WHATSAPP_LINK } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href),
    ).filter(Boolean) as Element[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur transition-shadow',
        scrolled ? 'shadow-sm' : '',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="Kuazom Vending Services home">
          <Image
            src="/kuazom-logo.jpg"
            alt="Kuazom Vending Services logo"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="hidden text-lg font-bold leading-tight text-foreground sm:block font-[family-name:var(--font-poppins)]">
            Kuazom
            <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Vending Services
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary',
                  active === link.href && 'text-primary',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-primary transition-all',
                    active === link.href ? 'w-full' : 'w-0',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'hidden rounded-full px-5 font-semibold sm:inline-flex',
            )}
          >
            <MessageCircle className="size-4" />
            {WHATSAPP_LABEL}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'w-full rounded-full font-semibold',
                )}
              >
                <MessageCircle className="size-4" />
                {WHATSAPP_LABEL}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
