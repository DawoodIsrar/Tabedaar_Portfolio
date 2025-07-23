'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Box, Heading, Text, Card, Button, Flex } from 'theme-ui'

export default function OrdersPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('/api/invioce')
        setData(res.data.data)
      } catch (err) {
        setError('Failed to load orders')
      }
    }

    fetchOrders()
  }, [])

  if (error) return <Box sx={{ p: 4, color: 'red' }}>{error}</Box>
  if (!data) return <Box sx={{ p: 4 }}>Loading...</Box>

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', px: 3, py: 4 }}>
      <Heading as="h1" sx={{ mb: 4 }}>All Orders</Heading>
      <Box sx={{ display: 'grid', gap: 3 }}>
        {data.map(inv => (
          <Card key={inv._id} sx={{ p: 3, borderRadius: '10px', border: '1px solid #eee' }}>
            <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>{inv.name}</Heading>
            <Text><strong>Phone:</strong> {inv.phone}</Text>
            <Text><strong>Destination:</strong> {inv.destination}</Text>
            <Text><strong>Total:</strong> {inv.total} PKR</Text>
            <Flex sx={{ mt: 3 }}>
              <Link href={`/Invioce/${inv._id}`} passHref>
                <Button as="a" variant="outline" sx={{backgroundColor:"lightblue"}}>View Invoice</Button>
              </Link>
            </Flex>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
