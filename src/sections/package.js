import { Container, Grid, Box, Heading, Text, Card } from 'theme-ui';
import SectionHeader from 'components/section-header';
import {  MapPin } from 'lucide-react';
import Phone from '../assets/phone.png';
import Whatsapp from '../assets/whatsapp.png';
import Image from 'next/image';

const branches = [
  {
    id: 1,
    title: 'Head Office – Thana',
    address: 'Main Bazar, Thana Malakand',
    phone: '+92 341 7713938',
  },
  {
    id: 2,
    title: 'Chakdara Branch',
    address: 'GT Road Amirabad, Chakdara – Near Baby’s World',
    phone: '+92 320 3713938',
  },
  {
    id: 3,
    title: 'Batkhela Branch',
    address: 'Opt Hameed 1, Main Bazar Batkhela',
    phone: '+92 341 0771341',
  },
];

export default function BranchesSection() {
  return (
    <Box id='branches' sx={styles.section}>
      <Container>
        <SectionHeader slogan="Our Locations" title="Find Tabedaar Near You" />

        <Grid sx={styles.grid}>
          {branches.map((branch) => (
            <Card key={branch.id} sx={styles.card}>
              <Heading as="h3" sx={styles.title}>{branch.title}</Heading>
              <Box sx={styles.infoRow}>
                <MapPin size={18} />
                <Text>{branch.address}</Text>
              </Box>
                   <Box sx={styles.contactButtons}>
                <a href="tel:+923001234567" style={styles.callButton}>
                 <Image src={Phone} alt='phone' width={20} height={20}></Image> Call: {}{branch.phone}
                </a>
                <a
  href={`https://wa.me/${branch.phone.replace(/\D/g, '')}`}
  target="_blank"
  rel="noopener noreferrer"
  style={styles.whatsappButton}
>
  <Image src={Whatsapp} alt='phone' width={20} height={20}></Image>WhatsApp {branch.title}
</a>
              </Box>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    backgroundColor: '#f0f4ff',
    py: [5, 6, 7],
  },
  grid: {
    gridTemplateColumns: ['1fr', null, '1fr 1fr'],
    gap: 4,
  },
  card: {
    backgroundColor: 'white',
    p: 4,
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  title: {
    fontSize: 3,
    fontWeight: 'bold',
    color: '#234582',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    color: '#333',
    fontSize: 1,
  },
   contactButtons: {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
  mt: 3,
},

callButton: {
  backgroundColor: '#0D458F',
  color: 'white',
  padding: '12px 20px',
  borderRadius:"45px",
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
  boxShadow: '0 4px 12px rgba(0, 122, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
  ':hover': {
    backgroundColor: '#005ecb',
  },
},

whatsappButton: {
  backgroundColor: '#25D366',
  color: 'white',
  padding: '12px 20px',
  borderRadius: '45px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
   display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
  ':hover': {
    backgroundColor: '#1da851',
  },
},
};
