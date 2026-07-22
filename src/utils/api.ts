import { supabase } from './supabase'

export type LeadPayload = { name: string; phone: string; email: string; budget: string; configuration: string; message?: string; source?: string; campaign?: string; medium?: string; keyword?: string; gclid?: string }

export async function submitLead(payload: LeadPayload) {
  if (!supabase) throw new Error('Lead service is not configured.')

  const { error } = await supabase.from('leads').insert({
    ...payload,
    message: payload.message || null,
    landing_page: window.location.href,
    user_agent: navigator.userAgent,
  })

  if (error) throw error
  return { success: true }
}
