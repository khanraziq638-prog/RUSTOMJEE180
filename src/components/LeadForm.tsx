import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoaderCircle, Send } from 'lucide-react'
import { submitLead, type LeadPayload } from '../utils/api'
import { getLeadTracking, trackEvent } from '../utils/tracking'

type Props = { compact?: boolean; title?: string; subtitle?: string; submitLabel?: string; onSuccess?: () => void }
export function LeadForm({ compact = false, title = 'Request a private preview', subtitle, submitLabel = 'Enquire now', onSuccess }: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadPayload>()
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [tracking,setTracking] = useState<Record<string,string>>({})
  const [started,setStarted] = useState(false)
  useEffect(()=>setTracking(getLeadTracking()),[])
  const onSubmit = async (data: LeadPayload) => {
    setState('loading')
    trackEvent('form_submit')
    try { await submitLead({ ...data, ...tracking }); setState('success'); trackEvent('form_success'); reset(); onSuccess?.() }
    catch { setState('error'); trackEvent('form_error') }
  }
  if (state === 'success') return <div className="flex min-h-64 flex-col justify-center border border-gold/40 bg-sand p-7 text-center"><p className="eyebrow">Thank you</p><h3 className="display text-2xl">Your request is received.</h3><p className="mt-3 text-sm text-stone-600">Our property advisor will be in touch shortly.</p><button onClick={() => setState('idle')} className="mt-6 text-xs font-bold uppercase tracking-widest text-gold">Send another enquiry</button></div>
  return <form onFocus={()=>{if(!started){setStarted(true);trackEvent('form_start')}}} onSubmit={handleSubmit(onSubmit)} className={`rounded-2xl border border-gold/35 bg-[#fbf8f3]/95 p-4 text-ink shadow-luxury backdrop-blur-xl sm:p-5 ${compact ? 'md:p-5' : 'md:p-8'}`} noValidate>
    <input type="hidden" {...register('source')} value={tracking.source || ''}/><input type="hidden" {...register('campaign')} value={tracking.campaign || ''}/><input type="hidden" {...register('medium')} value={tracking.medium || ''}/><input type="hidden" {...register('keyword')} value={tracking.keyword || ''}/><input type="hidden" {...register('gclid')} value={tracking.gclid || ''}/>
    <p className="eyebrow">Private consultation</p><h3 className="display mb-2 text-xl leading-tight">{title}</h3>{subtitle && <p className="mb-4 text-xs leading-5 text-stone-600">{subtitle}</p>}
    <div className={compact ? 'grid gap-x-5 gap-y-2 md:grid-cols-2' : 'space-y-3'}>
      <div><label className="form-label" htmlFor="name">Full name</label><input id="name" className="field" placeholder="Your full name" {...register('name', { required: 'Please enter your name' })} />{errors.name && <p className="error">{errors.name.message}</p>}</div>
      <div><label className="form-label" htmlFor="phone">Mobile number</label><input id="phone" inputMode="numeric" className="field" placeholder="+91 98765 43210" {...register('phone', { required: 'Please enter your mobile number', pattern: { value: /^(?:\+91[-\s]?)?[6-9]\d{9}$/, message: 'Enter a valid Indian mobile number' } })} />{errors.phone && <p className="error">{errors.phone.message}</p>}</div>
      <div><label className="form-label" htmlFor="email">Email address</label><input id="email" type="email" className="field" placeholder="you@email.com" {...register('email', { required: 'Please enter your email', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' } })} />{errors.email && <p className="error">{errors.email.message}</p>}</div>
      <div><label className="form-label" htmlFor="budget">Budget</label><select id="budget" className="field" defaultValue="" {...register('budget', { required: 'Please select a budget' })}><option value="" disabled>Select your budget</option><option>₹2–3 Cr</option><option>₹3–5 Cr</option><option>₹5 Cr+</option></select>{errors.budget && <p className="error">{errors.budget.message}</p>}</div>
      <div><label className="form-label" htmlFor="configuration">Configuration</label><select id="configuration" className="field" defaultValue="" {...register('configuration', { required: 'Please choose a configuration' })}><option value="" disabled>I'm interested in</option><option>2 BHK</option><option>3 BHK</option><option>4 BHK</option></select>{errors.configuration && <p className="error">{errors.configuration.message}</p>}</div>
      {compact && <div><label className="form-label" htmlFor="message">Message <span className="normal-case tracking-normal">(optional)</span></label><input id="message" className="field" placeholder="Tell us what you are looking for" {...register('message')} /></div>}
    </div>
    {state === 'error' && <p className="mt-4 text-sm text-red-600">We could not submit your request. Please call us directly.</p>}
    <button disabled={state === 'loading'} className="btn-gold mt-5 w-full !bg-[#c8a15a] !text-ink disabled:cursor-not-allowed disabled:opacity-70">{state === 'loading' ? <><LoaderCircle size={16} className="animate-spin" /> Sending</> : <><Send size={15} /> {submitLabel}</>}</button>
  </form>
}
