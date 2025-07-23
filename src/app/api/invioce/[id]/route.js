import { connectDB } from '../../../../lib/db'
import Invoice from '../../../../models/Invioce'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  await connectDB()

  const { id } = params

  try {
    const invoice = await Invoice.findById(id)
    if (!invoice) {
      return NextResponse.json(
        { success: false, message: 'Invoice not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: invoice }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export function POST() {
  return NextResponse.json(
    { message: 'Method Not Allowed' },
    { status: 405 }
  )
}
