import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const products = [
  {
    tag: 'Snacks',
    image: '/products/snacks.png',
    title: 'Healthy Snacks',
    description: 'Granola bars, nuts, fresh fruit, and better-for-you chips.',
  },
  {
    tag: 'Beverages',
    image: '/products/beverages.png',
    title: 'Refreshing Drinks',
    description: 'Water, juice, smart drinks, and low-sugar options.',
  },
  {
    tag: 'Food',
    image: '/products/food.png',
    title: 'Fresh & Light Meals',
    description: 'Salads, wraps, and fresh grab-and-go options where available.',
  },
  {
    tag: 'Technology',
    image: '/products/technology.png',
    title: 'Smart Machines',
    description: 'Touchscreen, cashless payment, and remote monitoring.',
  },
]

export function Products() {
  return (
    <section id="products" className="bg-muted/60 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Curated for taste, health, and convenience"
          description="From wholesome snacks to the smart machine itself, everything is chosen to keep your people fuelled and happy."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.tag} delay={i * 60}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-card-foreground font-[family-name:var(--font-poppins)]">
                    {product.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
