import { motion } from 'framer-motion'

type Props = { eyebrow: string; title: string; copy?: string; centered?: boolean }
export function SectionHeading({ eyebrow, title, copy, centered = false }: Props) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className="eyebrow">{eyebrow}</p><h2 className="display text-4xl leading-tight md:text-5xl">{title}</h2>
    {copy && <p className="mt-5 text-sm leading-7 text-stone-600 md:text-base">{copy}</p>}
  </motion.div>
}
