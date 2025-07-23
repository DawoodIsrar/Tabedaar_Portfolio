import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  unit: String,
  description: String,
})

const invoiceSchema = new mongoose.Schema({
  name: String,
  phone: String,
  destination: String,
  distance: Number,
  ratePerKM: Number,
  timeTaken: Number,
  items: [itemSchema],
  total: Number,
  createdAt: Date,
})

export default mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema)

