'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Box, Button, Input, Label, Heading, Flex } from 'theme-ui'
import Image from 'next/image'
import Logo from '../../assets/Logof.png' // Update this if your logo is in a different path

export default function CreateInvoice() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    distance: '',
    ratePerKM: 25,
    timeTaken: '',
    items: [{ name: '', quantity: 1, unit: 'Pcs', description: '' }],
  })

  const router = useRouter()

  const handleItemChange = (idx, field, value) => {
    const newItems = [...formData.items]
    newItems[idx][field] = value
    setFormData({ ...formData, items: newItems })
  }

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: '', quantity: 1, unit: 'Pcs', description: '' }],
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/invioce', formData)
      router.push('/orders')
    } catch (err) {
      alert('Error creating invoice')
    }
  }

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', px: 3, py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Image src={Logo} alt="App Logo" width={80} height={80} />
        <Heading as="h2" sx={{ mt: 3 }}>Create Invoice</Heading>
      </Box>

      <Box as="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        </Box>

        <Box>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
        </Box>

        <Box>
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" value={formData.destination} onChange={e => setFormData({ ...formData, destination: e.target.value })} />
        </Box>

        <Flex gap={3} sx={{ flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 45%' }}>
            <Label htmlFor="distance">Distance (KM)</Label>
            <Input type="number" id="distance" value={formData.distance} onChange={e => setFormData({ ...formData, distance: e.target.value })} />
          </Box>
          <Box sx={{ flex: '1 1 45%' }}>
            <Label htmlFor="timeTaken">Time Taken</Label>
            <Input type="number" id="timeTaken" value={formData.timeTaken} onChange={e => setFormData({ ...formData, timeTaken: e.target.value })} />
          </Box>
        </Flex>

        <Heading as="h3" sx={{ mt: 4 }}>Items</Heading>
        {formData.items.map((item, idx) => (
          <Flex key={idx} gap={2} sx={{ flexWrap: 'wrap' }}>
            <Box sx={{ flex: '1 1 30%' }}>
              <Label>Item</Label>
              <Input value={item.name} onChange={e => handleItemChange(idx, 'name', e.target.value)} />
            </Box>
            <Box sx={{ flex: '1 1 15%' }}>
              <Label>Qty</Label>
              <Input type="number" value={item.quantity} onChange={e => handleItemChange(idx, 'quantity', e.target.value)} />
            </Box>
            <Box sx={{ flex: '1 1 15%' }}>
              <Label>Unit</Label>
              <Input value={item.unit} onChange={e => handleItemChange(idx, 'unit', e.target.value)} />
            </Box>
            <Box sx={{ flex: '1 1 35%' }}>
              <Label>Description</Label>
              <Input value={item.description} onChange={e => handleItemChange(idx, 'description', e.target.value)} />
            </Box>
          </Flex>
        ))}

        <Button type="button" onClick={addItem} variant="outline">Add Item</Button>
        <Button type="submit">Submit Invoice</Button>
      </Box>
    </Box>
  )
}
