'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import html2pdf from 'html2pdf.js'
import axios from 'axios'
import { Box, Heading, Text, Button, Flex, Card, Divider, Image } from 'theme-ui'
import logo from '../../../assets/Logo.png'

export default function InvoiceDetail() {
  const { id } = useParams()
  const [invoice, setInvoice] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    const fetchInvoice = async () => {
      try {
        const res = await axios.get(`/api/invioce/${id}`)
        setInvoice(res.data.data)
      } catch (err) {
        setError('Invoice not found or something went wrong')
      }
    }
    fetchInvoice()
  }, [id])

  const downloadPDF = () => {
    const element = document.getElementById('invoice-pdf')
    if (element) {
      html2pdf()
        .set({ margin: 0.5, filename: `Invoice-${invoice.name}.pdf`, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } })
        .from(element)
        .save()
    }
  }

  if (error) return <Box sx={{ p: 4, color: 'red' }}>{error}</Box>
  if (!invoice) return <Box sx={{ p: 4 }}>Loading...</Box>

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', px: 3, py: 5 }}>
      <Card id="invoice-pdf" sx={{ bg: 'white', borderRadius: 8, p: 4, border: '1px solid #cce0f4' }}>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Image src={logo} alt="App Logo" sx={{ width: 60, height: 60 }} />
          <Heading as="h2" sx={{ color: 'primary' }}>Invoice</Heading>
        </Flex>

        <Divider sx={{ borderColor: 'lightgray', mb: 3 }} />

        <Box>
          <Text><strong>Name:</strong> {invoice.name}</Text>
          <Text><strong>Phone:</strong> {invoice.phone}</Text>
          <Text><strong>Destination:</strong> {invoice.destination}</Text>
          <Text><strong>Distance:</strong> {invoice.distance} KM</Text>
          <Text><strong>Rate:</strong> {invoice.ratePerKM} PKR</Text>
          <Text><strong>Total:</strong> {invoice.total} PKR</Text>
        </Box>

        <Heading as="h3" sx={{ mt: 4, mb: 2, color: 'primary' }}>Items</Heading>
        <Box as="ul" sx={{ pl: 3 }}>
          {invoice.items.map((item, idx) => (
            <li key={idx}>
              <Text>{item.name} - {item.quantity} {item.unit}</Text>
            </li>
          ))}
        </Box>
      </Card>

      <Button onClick={downloadPDF} sx={{ mt: 4, bg: 'primary', color: 'white', px: 4, py: 2 }}>Download PDF</Button>
    </Box>
  )
}