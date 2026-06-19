import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[family-name:var(--font-poppins)]">
        {title}
      </h2>
      <span
        className={cn(
          'mt-4 block h-1 w-16 rounded-full bg-primary',
          align === 'center' && 'mx-auto',
        )}
      />
      {description && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
