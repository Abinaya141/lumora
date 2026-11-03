import categories from '../data/categories.json'

export default function CategorySection({ activeCategory, onSelect }) {
  const pick = (id) => {
    onSelect(id)
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section id="collections" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <h2 className="max-w-xl font-display text-4xl text-ink sm:text-5xl">Shop by category</h2>
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {categories.map((c, i) => (
          <button
            key={c.id} onClick={() => pick(c.id)} aria-pressed={activeCategory === c.id}
            className={`group relative block overflow-hidden text-left ${i % 2 ? 'lg:mt-12' : ''}`}
          >
            <img src={c.image} alt={`${c.name} collection`} loading="lazy"
              className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-4 text-white sm:p-6">
              <h3 className="font-display text-2xl sm:text-3xl">{c.name}</h3>
              <p className="mt-1 hidden text-sm text-white/80 sm:block">{c.tagline}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
