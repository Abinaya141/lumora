import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react'

const benefits = [
  { icon: Truck, title: 'Free Shipping', text: 'On all orders over $75.' },
  { icon: ShieldCheck, title: 'Secure Payments', text: 'Encrypted checkout, always.' },
  { icon: RotateCcw, title: 'Easy Returns', text: '30 days, no questions asked.' },
  { icon: Headphones, title: 'Customer Support', text: 'Real people, seven days a week.' },
]

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex flex-col items-start gap-3">
            <Icon size={28} strokeWidth={1.25} className="text-clay" />
            <h3 className="font-display text-lg text-ink">{title}</h3>
            <p className="text-sm text-body/70">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
