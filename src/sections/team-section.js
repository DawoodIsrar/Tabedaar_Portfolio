import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Atiq from 'assets/atiq.png';
import Shahzeb from 'assets/shahzaib.png';

const data = [
  {
    id: 1,
    imgSrc: Atiq,
    altText: 'Atiq Rahem',
    title: 'Atiq Rahim',
    designation: 'Founder & COO',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/atiq.rahim.3',
        icon: <FaFacebookF />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '#',
      //   icon: <FaTwitter />,
      // },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/attique_49/?igsh=dmkyYWNwcTh0ZnFp#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Shahzeb,
    altText: 'Shahzeb Khan',
    title: 'Shahzeb Khan',
    designation: 'Founder & CFO ',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/shahzaib.khan.189278/',
        icon: <FaFacebookF />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '#',
      //   icon: <FaTwitter />,
      // },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/ishahzaibkhan_01?igsh=MWNjYzc1Z2RxaGgwdA%3D%3D',
        icon: <FaInstagram />,
      },
    ],
  }
  // {
  //   id: 3,
  //   imgSrc: Member3,
  //   altText: 'Madyson Elmo',
  //   title: 'Dawood Israr',
  //   designation: 'Co-Founder & CEO',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // }
];

export default function TeamSection() {
  return (
    <Box id='team' sx={{marginTop: '50px'}}>
      <Container>
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
};
