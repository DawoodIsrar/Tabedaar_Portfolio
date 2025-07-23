
// lib/db.js
import mongoose from 'mongoose'

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return

  try {
    await mongoose.connect("mongodb+srv://DawoodOps:UshWlN9mI5s2Vkqo@merndb.7tl0l.mongodb.net/?retryWrites=true&w=majority&appName=MernDb")
    console.log('MongoDB connected')
  } catch (err) {
    console.error('MongoDB connection error:', err)
  }
}
