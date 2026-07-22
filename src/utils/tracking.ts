export type TrackingEvent =
  | 'hero_get_price_click' | 'brochure_click' | 'floor_plan_click' | 'payment_plan_click'
  | 'site_visit_click' | 'whatsapp_click' | 'call_click' | 'form_start' | 'form_submit'
  | 'form_success' | 'form_error' | 'gallery_open' | 'faq_open' | 'scroll_50' | 'scroll_90'

declare global { interface Window { dataLayer?: Record<string, unknown>[]; gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void } }

export function initializeTracking() {
  const { VITE_GTM_ID: gtmId, VITE_GA_MEASUREMENT_ID: gaId, VITE_META_PIXEL_ID: metaId } = import.meta.env
  const addScript = (src: string) => { if (!document.querySelector(`script[src="${src}"]`)) { const script=document.createElement('script');script.async=true;script.src=src;document.head.appendChild(script) } }
  if (gtmId) { window.dataLayer=window.dataLayer||[]; addScript(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`) }
  if (gaId) { window.dataLayer=window.dataLayer||[]; window.gtag=window.gtag||((...args: unknown[])=>window.dataLayer?.push(args as unknown as Record<string, unknown>)); addScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`); window.gtag('js',new Date());window.gtag('config',gaId) }
  if (metaId) { window.fbq=window.fbq||((...args: unknown[])=>window.dataLayer?.push({meta:args})); window.fbq('init',metaId);window.fbq('track','PageView') }
}

export function trackEvent(event: TrackingEvent, parameters: Record<string, unknown> = {}) {
  const payload = { event, ...parameters }
  window.dataLayer?.push(payload)
  window.gtag?.('event', event, parameters)
  window.fbq?.('trackCustom', event, parameters)
}

export function getLeadTracking() {
  const keys = ['source', 'campaign', 'medium', 'keyword', 'gclid'] as const
  const params = new URLSearchParams(window.location.search)
  const existing = JSON.parse(sessionStorage.getItem('bayview_tracking') || '{}') as Record<string, string>
  const values = Object.fromEntries(keys.map(key => [key, params.get(key) || existing[key] || ''])) as Record<typeof keys[number], string>
  sessionStorage.setItem('bayview_tracking', JSON.stringify(values))
  return values
}
