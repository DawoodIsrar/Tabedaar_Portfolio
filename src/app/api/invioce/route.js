import { connectDB } from '../../../lib/db'
import Invoice from '../../../models/Invioce'
import { NextResponse } from 'next/server'


export async function GET(req) {
  await connectDB()

  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 })
    console.log('invoices', invoices)
    return NextResponse.json({ success: true, data: invoices }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
export async function POST(req) {
  await connectDB()

  try {
    const body = await req.json()
    const total = parseFloat(body.distance) * body.ratePerKM
    const invoice = await Invoice.create({ ...body, total, createdAt: new Date() })
    return NextResponse.json({ success: true, data: invoice }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}


