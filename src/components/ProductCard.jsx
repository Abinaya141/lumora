import { Heart, Star } from 'lucide-react'

export default function ProductCard({ product, wished, onToggleWishlist, onAddToCart }) {
  const { name, category, price, originalPrice, rating, badge, image } = product
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100)

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-sand">
        <img src={image} alt={name} loading="lazy"
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className={`absolute left-3 top-3 px-3 py-1 text-xs font-semibold ${badge === 'New' ? 'bg-clay text-white' : 'bg-ink text-white'}`}>{badge}</span>
        <button onClick={() => onToggleWishlist(product.id)} aria-pressed={wished}
          aria-label={wished ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white shadow transition hover:scale-110">
          <Heart size={17} className={wished ? 'fill-clay text-clay' : 'text-ink'} />
        </button>
        <button onClick={() => onAddToCart(product)}
          className="absolute inset-x-0 bottom-0 bg-ink py-3.5 text-sm font-semibold text-white transition hover:bg-clay lg:translate-y-full lg:group-hover:translate-y-0 lg:group-focus-within:translate-y-0">
          Add to Cart
        </button>
      </div>
      <div className="mt-4">
        <p className="text-xs text-body/60">{category[0].toUpperCase() + category.slice(1)}</p>
        <h3 className="mt-1 font-display text-lg text-ink">{name}</h3>
        <div className="mt-1 flex items-center gap-1 text-xs text-body/70" aria-label={`Rated ${rating} out of 5`}>
          <Star size={13} className="fill-clay text-clay" /> {rating}
        </div>
        <p className="mt-2 flex flex-wrap items-baseline gap-2 text-sm">
          <span className="font-semibold text-ink">${price}</span>
          <span className="text-body/50 line-through">${originalPrice}</span>
          <span className="font-semibold text-clay">{discount}% off</span>
        </p>
      </div>
    </article>
  )
}
