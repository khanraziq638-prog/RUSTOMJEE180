import { useState } from 'react'
import { X } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
const photos=[
 ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80','Living space'],
 ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80','Residence exterior'],
 ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80','Dining room'],
 ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=80','Bedroom'],
 ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80','Warm interiors']
]
export function Gallery(){const [selected,setSelected]=useState<number|null>(null);return <section id="gallery" className="section bg-sand"><div className="container"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading eyebrow="A visual introduction" title="A study in light, material and proportion."/><p className="max-w-xs text-sm leading-6 text-stone-600">Illustrative lifestyle imagery. Final specifications are subject to the definitive project documents.</p></div><div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{photos.map(([url,alt],index)=><button onClick={()=>setSelected(index)} className={`group relative overflow-hidden ${index===0?'col-span-2 row-span-2 min-h-64':'min-h-36'}`} key={url}><img loading="lazy" src={url} alt={alt} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"/><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 p-3 text-left text-xs text-white opacity-0 transition group-hover:opacity-100">View image</span></button>)}</div></div>{selected!==null&&<div onClick={()=>setSelected(null)} className="fixed inset-0 z-[70] grid place-items-center bg-black/90 p-5"><button className="absolute right-5 top-5 text-white" aria-label="Close gallery"><X/></button><img onClick={e=>e.stopPropagation()} className="max-h-[85vh] max-w-full object-contain" src={photos[selected][0]} alt={photos[selected][1]}/></div>}</section>}
