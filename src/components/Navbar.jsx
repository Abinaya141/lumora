import { useState } from 'react'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ search, onSearch, wishlistCount, cartCount, cartBump }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main">
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <a href="#home" className="font-display text-2xl font-medium tracking-[0.2em] text-ink">LUMORA</a>

        <ul className="hidden gap-9 text-sm font-medium lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-colors hover:text-clay">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search products"><Search size={20} /></button>
          <a href="#shop" className="relative hidden sm:block" aria-label="Wishlist">
            <Heart size={20} />
            {wishlistCount > 0 && <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-clay text-[10px] text-white">{wishlistCount}</span>}
          </a>
          <button className="relative" aria-label={`Shopping bag, ${cartCount} items`}>
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span key={cartBump} className="absolute -right-2 -top-2 grid h-4 w-4 animate-pop place-items-center rounded-full bg-clay text-[10px] text-white">{cartCount}</span>
            )}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="border-t border-ink/10 bg-white px-5 py-3 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <Search size={18} className="text-ink/50" />
            <input
              autoFocus value={search} onChange={(e) => onSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              placeholder="Search dresses, sneakers, totes…" aria-label="Search products"
              className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-ink/40"
            />
            {search && <button onClick={() => onSearch('')} aria-label="Clear search"><X size={16} /></button>}
          </div>
        </div>
      )}

      {menuOpen && (
        <ul className="border-t border-ink/10 bg-white px-5 py-4 lg:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)} className="block py-3 font-display text-xl">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
