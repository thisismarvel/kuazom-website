import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { WhyKuazom } from '@/components/why-kuazom'
import { Industries } from '@/components/industries'
import { Products } from '@/components/products'
import { HowItWorks } from '@/components/how-it-works'
import { ServiceArea } from '@/components/service-area'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { FloatingCall } from '@/components/floating-call'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kuazom Vending Services',
  description:
    'Smart, touchscreen vending machines with healthy and nutritious snacks and drinks for facilities across the Greater Toronto Area.',
  telephone: '+1-905-302-8363',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Greater Toronto Area, Ontario, Canada',
  },
  slogan: 'We vend healthy and nutritious snacks and drinks',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main className="[&_section]:scroll-mt-16">
        <Hero />
        <WhyKuazom />
        <Industries />
        <Products />
        <HowItWorks />
        <ServiceArea />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingCall />
    </>
  )
}
