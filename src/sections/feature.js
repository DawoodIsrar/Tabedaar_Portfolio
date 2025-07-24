import { Container, Grid, Box, Text, Heading } from 'theme-ui';
import SectionHeader from '../components/section-header';

const data = [
  {
    id: 1,
    icon: '⚡',
    title: 'Fast & Reliable',
    text: 'Tabedaar ensures quick response and delivery across Malakand region — on time, every time.',
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Trusted Network',
    text: 'Loved by customers and vendors alike, Tabedaar is building strong community-based service.',
  },
  {
    id: 3,
    icon: '📦',
    title: 'Order Tracking',
    text: 'Track your orders and rides in real-time with updates from pickup to drop-off.',
  },
  {
    id: 4,
    icon: '🌐',
    title: 'Expanding Reach',
    text: 'With branches in Thana, Chakdara & Batkhela, we’re rapidly expanding across the Malakand region.',
  },
];

export default function Feature() {
  return (
    <Box id='workflow' sx={{ variant: 'section.feature', marginTop:'50px' }}>
      <Container>
        <SectionHeader
          slogan="Why Choose Tabedaar?"
          title="Reliable Features Designed for Local Needs"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Text sx={styles.icon}>{item.icon}</Text>
              <Box>
                <Heading as="h3" sx={styles.title}>{item.title}</Heading>
                <Text sx={styles.text}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'left',
    bg: 'white',
    p: 3,
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    ':hover': {
      boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
      transform: 'translateY(-4px)',
    },
  },
  icon: {
    fontSize: '36px',
    mr: 3,
    lineHeight: '1',
  },
  title: {
    fontSize: 3,
    fontWeight: 700,
    color: 'heading_secondary',
    mb: 2,
    ml:["15px"],
    color: 'primary',
  },
  text: {
    fontSize: 1,
    lineHeight: '1.9',
    color: 'text',
  },
};
