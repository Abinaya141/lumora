import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const quick = ['Home', 'Shop', 'Collections', 'About']
const support = ['Shipping & Delivery', 'Returns', 'Size Guide', 'Contact Us']
const socials = [
  { icon: Instagram, label: 'Instagram' }, { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' }, { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-2">
          <a href="#home" className="font-display text-2xl tracking-[0.2em] text-ink">LUMORA</a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-body/70">Thoughtfully curated essentials in natural fabrics and honest cuts, made to be worn for years.</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a key={label} href="#home" aria-label={label} className="grid h-10 w-10 place-items-center border border-ink/20 transition hover:border-clay hover:text-clay"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg text-ink">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm">{quick.map((l) => <li key={l}><a href={`#${l.toLowerCase() === 'collections' ? 'collections' : l.toLowerCase()}`} className="hover:text-clay">{l}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="font-display text-lg text-ink">Customer support</h3>
          <ul className="mt-4 space-y-3 text-sm">{support.map((l) => <li key={l}><a href="#contact" className="hover:text-clay">{l}</a></li>)}</ul>
        </div>
      </div>
      <p className="border-t border-ink/10 py-6 text-center text-xs text-body/60">© {new Date().getFullYear()} LUMORA. All rights reserved.</p>
    </footer>
  )
}
