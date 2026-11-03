export default function PromotionalBanner() {
  return (
    <section id="about" className="relative isolate overflow-hidden">
      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80"
        alt="Editorial fashion photograph" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-ink/55" />
      <div className="mx-auto max-w-7xl px-5 py-28 text-white lg:px-8 lg:py-44">
        <h2 className="max-w-2xl font-display text-4xl leading-tight sm:text-6xl">Style That Speaks Without Saying a Word.</h2>
        <p className="mt-6 max-w-md text-white/85">Find your signature style with our carefully curated collection.</p>
        <a href="#shop" className="mt-10 inline-block bg-white px-8 py-4 text-sm font-semibold text-ink transition hover:bg-clay hover:text-white">Discover More</a>
      </div>
    </section>
  )
}
