import React from 'react';
import { Container, Box, Grid, Text, Heading } from 'theme-ui';

const services = [
  {
    id: 1,
    icon: '🛵',
    title: 'Ride Booking',
    text: 'Affordable bike rides across Thana & Chakdara — just a tap away.',
  },
  {
    id: 2,
    icon: '🍔',
    title: 'Fast Food',
    text: 'Order from top local restaurants and enjoy hot meals at home.',
  },
  {
    id: 3,
    icon: '🛒',
    title: 'Grocery Delivery',
    text: 'Get groceries delivered quickly from local shops to your door.',
  },
  {
    id: 4,
    icon: '🍎🥦',
    title: 'Fruits & Vegetables',
    text: 'Fresh fruits and vegetables delivered straight from the market.',
  },
  {
    id: 5,
    icon: '🍗',
    title: 'Meat & Chicken',
    text: 'High-quality meat and chicken from trusted vendors.',
  },
  {
    id: 6,
    icon: '💊',
    title: 'Medicine',
    text: 'Essential medicines delivered safely and on time.',
  },
  {
    id: 7,
    icon: '✏️📚',
    title: 'Stationery',
    text: 'School and office supplies available on demand.',
  },
  {
    id: 8,
    icon: '🥛',
    title: 'Milk & Yogurt',
    text: 'Daily fresh dairy products delivered every morning.',
  },
  {
    id: 9,
    icon: '📍',
    title: 'Pick & Drop',
    text: 'Courier and pickup services made easy for everyone.',
  },
];

export default function ServiceSection() {
  return (
    <Box id='services' as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.headingBox}>
          <Text as="span" sx={styles.tag}>Our Services</Text>
          <Heading as="h2" sx={styles.title}>
            Delivery at Your Doorstep — Anytime, Anywhere
          </Heading>
        </Box>

        <Grid sx={styles.grid}>
          {services.map((service) => (
            <Box key={service.id} sx={styles.card}>
              <Text sx={styles.icon}>{service.icon}</Text>
              <Heading as="h3" sx={styles.cardTitle}>{service.title}</Heading>
              <Text sx={styles.cardText}>{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
const styles = {
  section: {
    py: [5, 6],
    backgroundColor: '#f9fafe',
  },
  headingBox: {
    textAlign: 'center',
    mb: [5, 6],
  },
  tag: {
    display: 'inline-block',
    fontSize: 1,
    color: 'primary',
    fontWeight: 'bold',
    mb: 2,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  title: {
    fontSize: [4, 5],
    fontWeight: 'bold',
    color: 'heading',
    lineHeight: 1.4,
    maxWidth: '600px',
    mx: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
    gap: [4, 5],
    px: [3, 4],
  },
  card: {
    bg: 'white',
    borderRadius: '12px',
    p: 4,
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.1)',
    },
  },
  icon: {
    fontSize: '40px',
    mb: 3,
    color: 'primary',
  },
  cardTitle: {
    fontSize: 3,
    fontWeight: 600,
    color: 'heading',
    mb: 2,
  },
  cardText: {
    fontSize: 1,
    color: 'text',
    lineHeight: 1.8,
  },
};
