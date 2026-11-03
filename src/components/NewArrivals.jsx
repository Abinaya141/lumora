import { Heart } from 'lucide-react'

export default function NewArrivals({ products, wishlist, onToggleWishlist, onAddToCart }) {
  return (
    <section id="new-arrivals" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-4xl text-ink sm:text-5xl">New arrivals</h2>
        <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2">
          {products.map((p) => (
            <article key={p.id} className="flex gap-5 bg-sand p-4 sm:gap-8 sm:p-6">
              <img src={p.image} alt={p.name} loading="lazy" className="h-44 w-32 shrink-0 object-cover sm:h-56 sm:w-44" />
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <p className="text-xs font-semibold text-clay">Just landed</p>
                  <h3 className="mt-2 font-display text-xl text-ink sm:text-2xl">{p.name}</h3>
                  <p className="mt-2 text-sm"><span className="font-semibold text-ink">${p.price}</span> <span className="text-body/50 line-through">${p.originalPrice}</span></p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => onAddToCart(p)} className="bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-clay">Add to Cart</button>
                  <button onClick={() => onToggleWishlist(p.id)} aria-pressed={wishlist.has(p.id)} aria-label={`Toggle wishlist for ${p.name}`}>
                    <Heart size={20} className={wishlist.has(p.id) ? 'fill-clay text-clay' : 'text-ink'} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
