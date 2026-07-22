// Placeholder serverless handler. Connect this to your CRM/email provider in production.
export async function POST(request: Request) {
  const lead = await request.json()
  console.info('New Bayview lead received', { ...lead, receivedAt: new Date().toISOString() })
  return Response.json({ success: true, message: 'Lead received' }, { status: 200 })
}
