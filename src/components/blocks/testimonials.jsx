import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card"

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}) {
  return (
    <section className={cn("bg-background text-foreground", "py-2 sm:py-2 md:px-0", className)}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        {/* Desktop Marquee */}
        <div className="relative hidden w-full md:flex flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:4rem] [gap:var(--gap)] flex-row [--duration:90s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`desk-${setIndex}-${i}`} {...testimonial} />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>

        {/* Mobile Slider */}
        <div className="flex w-full overflow-x-auto md:hidden px-4 py-6 space-x-4 snap-x scroll-smooth">
          {testimonials.map((testimonial, i) => (
            <div key={`mobile-${i}`} className="snap-center shrink-0 w-[280px]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
