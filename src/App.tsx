import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { FloatingActions } from './components/FloatingActions'
import { Footer } from './components/Footer'
import { Experience } from './components/Experience'
import { Hero } from './sections/Hero'
import { Highlights } from './sections/Highlights'
import { About } from './sections/About'
import { Configurations } from './sections/Configurations'
import { Amenities } from './sections/Amenities'
import { Location } from './sections/Location'
import { Gallery } from './sections/Gallery'
import { WhyInvest } from './sections/WhyInvest'
import { Testimonials } from './sections/Testimonials'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'
import { PaymentPlan } from './sections/PaymentPlan'
import { initializeTracking } from './utils/tracking'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

const schema = { '@context': 'https://schema.org', '@type': 'Residence', name: 'Rustomjee 180 Bayview', description: 'Luxury 2, 3 & 4 BHK residences in Matunga West, Mumbai.', address: { '@type': 'PostalAddress', addressLocality: 'Matunga West', addressRegion: 'Mumbai', addressCountry: 'IN' } }
export default function App(){const [modal,setModal]=useState(false);const [exitShown,setExitShown]=useState(false)
  useEffect(()=>initializeTracking(),[])
  useEffect(()=>{const leave=(e:MouseEvent)=>{if(e.clientY<10&&!exitShown){setModal(true);setExitShown(true)}};document.addEventListener('mouseout',leave);return()=>document.removeEventListener('mouseout',leave)},[exitShown])
  if (window.location.pathname.toLowerCase().includes('privacy-policy')) return <><Helmet><title>Privacy Policy | Rustomjee 180 Bayview</title><meta name="robots" content="index,follow"/></Helmet><Header onEnquire={()=>setModal(true)}/><PrivacyPolicy/><Footer compact/><Modal open={modal} onClose={()=>setModal(false)}/></>
  return <><Helmet><title>Rustomjee 180 Bayview Matunga West | 2 BHK from ₹4.50 Cr*</title><meta name="description" content="Explore 2, 3 and 4 BHK luxury residences at Rustomjee 180 Bayview, Matunga West. 2 BHK from ₹4.50 Cr*, carpet areas from 824 to 1,898 sq.ft. and an exclusive 10:90 payment plan*. Enquire for pricing and floor plans."/><meta name="keywords" content="Rustomjee 180 Bayview, Luxury Apartments Matunga, Matunga West Homes, 2 BHK Matunga, 3 BHK Matunga, 4 BHK Luxury Apartments, Sea View Apartments Mumbai"/><link rel="canonical" href="https://example.com/"/><meta property="og:title" content="Rustomjee 180 Bayview Matunga West | 2 BHK from ₹4.50 Cr*"/><meta property="og:description" content="Luxury 2, 3 and 4 BHK residences in Matunga West with an exclusive 10:90 payment plan."/><meta property="og:type" content="website"/><meta name="twitter:card" content="summary_large_image"/><meta name="robots" content="index,follow"/><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet><Experience/><Header onEnquire={()=>setModal(true)}/><motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55,duration:.7}}><Hero onBrochure={()=>setModal(true)}/><Highlights/><About/><Configurations onBrochure={()=>setModal(true)}/><PaymentPlan onEnquire={()=>setModal(true)}/><Amenities/><Location/><Gallery/><WhyInvest/><Testimonials/><FAQ/><FinalCTA/></motion.main><Footer/><FloatingActions/><Modal open={modal} onClose={()=>setModal(false)}/></>}
