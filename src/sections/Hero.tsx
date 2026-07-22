import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, CheckCircle2, Download } from 'lucide-react'
import { LeadForm } from '../components/LeadForm'
import { trackEvent } from '../utils/tracking'
import heroTower from '../assets/hero-tower.png'

const pills = ['2, 3 & 4 BHK', '824–1,898 Sq.ft.', 'From ₹4.50 Cr*', '10:90 Payment Plan*', 'Matunga West']
const trust = ['MahaRERA Registered', 'Official Channel Partner', 'No Brokerage Assistance', 'Private Site Visits', 'Latest Inventory Access']

export function Hero({ onBrochure }: { onBrochure: () => void }) {
  const openDetails = () => { trackEvent('hero_get_price_click'); onBrochure() }
  const brochure = () => { trackEvent('brochure_click'); onBrochure() }
  const visit = () => trackEvent('site_visit_click')
  return <section id="top" className="relative isolate min-h-[760px] overflow-hidden bg-[#11110f] pt-16 text-white">
    <motion.img animate={{ scale: [1, 1.055, 1], x: [0, -8, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} src={heroTower} className="absolute inset-0 -z-20 h-full w-full object-cover" alt="Illustrative dusk view of a luxury residential tower by the Mumbai coast" fetchPriority="high" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,17,15,.93)_0%,rgba(17,17,15,.73)_43%,rgba(17,17,15,.34)_100%)]" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(200,161,90,.18),transparent_30%)]" />
    <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-6 px-5 py-12 md:grid-cols-[minmax(0,1fr)_minmax(330px,370px)] md:gap-7 md:px-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-10 lg:py-14">
      <motion.div initial="hidden" animate="show" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: .12 } } }} className="max-w-3xl">
        <motion.p variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} className="eyebrow !text-[#c8a15a]">RUSTOMJEE 180 BAYVIEW · MATUNGA WEST</motion.p>
        <h1 className="display text-6xl leading-[.9] text-[#fbf8f3] sm:text-7xl lg:text-[5.8rem]"><motion.span variants={{ hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } }} className="block">Live Above</motion.span><motion.span variants={{ hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } }} className="block text-[#c8a15a]">Mumbai.</motion.span></h1>
        <motion.h2 variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }} className="display mt-6 max-w-2xl text-2xl leading-tight text-white md:text-3xl">Luxury Sea-View Residences at Rustomjee 180 Bayview</motion.h2>
        <motion.p variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="mt-5 max-w-2xl text-base leading-7 text-[#e2ddd5]">Spacious 2, 3 and 4 BHK residences with panoramic views, refined amenities and seamless connectivity across Mumbai.</motion.p>
        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="mt-7 flex flex-wrap gap-2">{pills.map((pill,index)=><motion.span initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .7 + index * .07 }} key={pill} className={`rounded-full border px-3 py-2 text-[10px] font-bold uppercase tracking-[.1em] backdrop-blur ${index===2 ? 'border-[#c8a15a] bg-[#c8a15a] text-[#11110f]' : 'border-white/25 bg-black/20 text-white'}`}>{pill}</motion.span>)}</motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="mt-8 flex flex-wrap gap-3"><button onClick={openDetails} className="btn-gold !bg-[#c8a15a] !text-[#11110f]">Get latest price <ArrowRight size={16}/></button><button onClick={brochure} className="btn-outline"><Download size={15}/> Download brochure</button><a onClick={visit} href="#visit" className="btn-outline"><CalendarDays size={15}/> Book a private site visit</a></motion.div>
        <p className="mt-4 text-xs font-medium text-[#c8a15a]">Exclusive 10:90 Payment Plan* <span className="ml-2 text-white/65">Pay 10% now and 90% on possession*</span></p>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[11px] text-white/85">{trust.map((item,index)=><motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + index * .08 }} className="flex items-center gap-2" key={item}><CheckCircle2 className="text-[#c8a15a]" size={14}/>{item}</motion.span>)}</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .28 }} className="mx-auto w-full max-w-[370px] md:mx-0 md:translate-x-5 md:justify-self-end lg:translate-x-6">
        <LeadForm compact title="Request Private Details" subtitle="Receive the latest price, floor plans, payment plan and available inventory." submitLabel="Get project details" />
        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-xl border border-[#c8a15a]/35 bg-[#11110f]/75 text-center text-[11px] backdrop-blur"><div className="border-r border-white/10 p-3"><p className="font-bold text-[#c8a15a]">Possession</p><p className="mt-1 text-white/75">December 2029*</p></div><div className="p-3"><p className="font-bold text-[#c8a15a]">MahaRERA</p><p className="mt-1 text-white/75">Wing A &amp; B registered</p></div></div>
      </motion.div>
    </div>
    <div className="relative border-t border-white/10 bg-[#11110f]/90 backdrop-blur"><div className="container flex flex-wrap items-center gap-x-8 gap-y-2 px-5 py-3 text-[10px] uppercase tracking-[.12em] text-white/75 md:px-10"><span className="font-bold text-[#c8a15a]">MahaRERA Registration</span><span>Wing A – P51900066547</span><span>Wing B – P51900066548</span><span className="ml-auto">Possession <strong className="ml-2 text-white">December 2029*</strong></span></div></div>
  </section>
}
