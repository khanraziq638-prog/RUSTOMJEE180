import { X } from 'lucide-react'
import { LeadForm } from './LeadForm'
export function Modal({ open, onClose, title = 'Request the brochure' }: { open: boolean; onClose: () => void; title?: string }) {
  if (!open) return null
  return <div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label={title}><div className="relative w-full max-w-md"><button onClick={onClose} className="absolute right-3 top-3 z-10 p-2 text-stone-500 hover:text-ink" aria-label="Close"><X size={20}/></button><LeadForm title={title} onSuccess={onClose}/></div></div>
}
