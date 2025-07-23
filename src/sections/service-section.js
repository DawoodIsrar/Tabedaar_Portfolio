import React from 'react';
import {
  Container,
  Box,
  Grid,
  Text,
  Heading
} from 'theme-ui';
import Image from 'next/image';
import TextFeature from 'components/text-feature';

import ServiceThumb from '../assets/service-thumb.png';
import shapePattern from '../assets/shape-pattern1.png';

const data = {
  subTitle: 'Our Services',
  title: 'Business Goals Achieved with Smart Delivery Solutions',
  features: [
    {
      id: 1,
      icon: '🛵',
      title: 'Ride Booking',
      text: 'Affordable and quick rides across Thana and Chakdara.',
    },
    {
      id: 2,
      icon: '🍔',
      title: 'Fast Food Delivery',
      text: 'Order hot meals from your favorite restaurants.',
    },
    {
      id: 3,
      icon: '🛒',
      title: 'Grocery Delivery',
      text: 'Fresh groceries delivered straight from the market.',
    },
    {
      id: 4,
      icon: '💊',
      title: 'Medicine Delivery',
      text: 'Get your essential medicines delivered on time.',
    },
    {
      id: 5,
      icon: '🥩',
      title: 'Meat & Chicken',
      text: 'Premium meat and poultry from trusted vendors.',
    },
    {
      id: 6,
      icon: '✏️',
      title: 'Stationery',
      text: 'Get school & office supplies delivered to your door.',
    },
  ],
};

export default function ServiceSection() {
  return (
    <Box sx={{ variant: 'section.services' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>

        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />

          <Grid sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Text sx={styles.icon}>{item.icon}</Text>

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
const styles = {
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    width: '100%',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: '100%',
      width: '100%',
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease',
    bg: 'white',
    borderRadius: '12px',
    p: 3,
    mb: 3,
    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
    ':hover': {
      boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
      transform: 'translateY(-4px)',
    },
  },
  icon: {
    fontSize: '36px',
    marginRight: '16px',
    flexShrink: 0,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-4px',
    title: {
      fontSize: 3,
      fontWeight: 700,
      color: 'heading',
      mb: [1],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: 1.8,
      color: 'text',
    },
  },
};
