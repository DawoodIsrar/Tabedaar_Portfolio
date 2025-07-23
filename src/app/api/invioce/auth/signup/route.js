// import { connectDB } from '../../../../../lib/db'
// import User from '../../../../../models/Invioc'
// import bcrypt from 'bcryptjs'

// export default async function handler(req, res) {
//   await connectDB()
//   if (req.method === 'POST') {
//     const { name, email, password } = req.body
//     const existingUser = await User.findOne({ email })
//     if (existingUser) return res.status(400).json({ message: 'User already exists' })

//     const hashedPassword = await bcrypt.hash(password, 10)
//     const user = await User.create({ name, email, password: hashedPassword })
//     return res.status(201).json({ message: 'User created', user: { name: user.name, email: user.email } })
//   }
//   res.status(405).end()
// }
