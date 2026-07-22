import { Ruler, ArrowDownToLine, FileText } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const homes = [
  ['2 BHK', 'Thoughtfully planned private spaces', '824–840 sq.ft.', 'From ₹4.50 Cr*'],
  ['3 BHK', 'Generous rooms for contemporary family life', '1,089–1,407 sq.ft.', 'Price on Request'],
  ['4 BHK', 'An expansive address with exceptional presence', '1,664–1,898 sq.ft.', 'Price on Request']
]

export function Configurations({ onBrochure }: { onBrochure: () => void }) {
  return <section className="section" id="residences"><div className="container"><SectionHeading centered eyebrow="Choose your expression" title="Residences with room to live beautifully."/><div className="mt-12 grid gap-5 md:grid-cols-3">{homes.map(([name,copy,area,price],index)=><article key={name} className="group overflow-hidden bg-ink p-7 text-white"><p className="text-xs font-bold tracking-[.2em] text-gold">0{index+2}</p><h3 className="display mt-9 text-4xl">{name}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-white/65">{copy}</p><div className="mt-7 border-y border-white/15 py-4"><p className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/50">Carpet Area</p><p className="flex items-center gap-2 text-sm"><Ruler size={15} className="text-gold"/>{area}</p></div><p className="mt-5 text-xs font-bold uppercase tracking-widest text-gold">{price}</p><div className="mt-7 flex flex-wrap gap-4"><button onClick={onBrochure} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition group-hover:text-gold"><ArrowDownToLine size={15}/> View floor plan</button><button onClick={onBrochure} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 transition hover:text-gold"><FileText size={15}/> Cost sheet</button></div></article>)}</div></div></section>
}
