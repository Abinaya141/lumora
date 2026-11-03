import ProductCard from './ProductCard'
import categories from '../data/categories.json'

export default function FeaturedProducts({ products, search, activeCategory, onSelect, onClearSearch, wishlist, onToggleWishlist, onAddToCart }) {
  const tabs = [{ id: 'all', name: 'All' }, ...categories]
  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="font-display text-4xl text-ink sm:text-5xl">Featured pieces</h2>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label="Filter by category">
          {tabs.map((t) => (
            <button key={t.id} role="tab" aria-selected={activeCategory === t.id} onClick={() => onSelect(t.id)}
              className={`whitespace-nowrap border px-5 py-2 text-sm font-medium transition ${activeCategory === t.id ? 'border-ink bg-ink text-white' : 'border-ink/20 hover:border-ink'}`}>
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {search && <p className="mt-6 text-sm text-body/70">Showing results for “{search}”</p>}

      {products.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-display text-2xl text-ink">Nothing matches your search.</p>
          <button onClick={() => { onClearSearch(); onSelect('all') }} className="mt-4 text-sm font-semibold text-clay underline">Clear filters</button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} wished={wishlist.has(p.id)} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  )
}
