'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { PHONE_TEL } from '@/lib/site'

export function FloatingCall() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={PHONE_TEL}
      aria-label="Call Kuazom Vending Services"
      className={`fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 sm:hidden ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Phone className="size-6" />
    </a>
  )
}
