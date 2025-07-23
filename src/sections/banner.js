import { Container, Box, Heading, Text, Button } from 'theme-ui';
import Logo from 'assets/Logo.png';
import Image from 'next/image';
export default function Banner() {
  return (
    <Box sx={styles.banner} id="home">
      <Container sx={styles.container}>
        <Box sx={styles.contentBox}>
          
          <Heading as="h1" variant="heroPrimary" className='text-primary'>
             Fast & Reliable Delivery and Pick & Drop Service Across Malakand
          </Heading>
          <Text as="p" variant="heroSecondary">
            From groceries and fast food to medicine, rides, and more Tabedaar brings it all to your doorstep. Trusted by thousands across the Malakand region.
          </Text>
          <Button onClick={() => {
    const el = document.getElementById('branches');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }} variant="primary" >Order Now</Button>
         
        </Box>

        <Box sx={styles.imageBox}>
          <Image src={Logo} alt="logo" width={400} height={400} className='m-10'/>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    backgroundColor: '#f0f8ff',
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '-20px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url("../assets/logo.jpg")`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '25%',
    },
  },
 
 container: {
  display: 'flex',
  flexDirection: 'row', // default
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 815px)': {
    flexDirection: 'column-reverse',
  },
},
  contentBox: {
    width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    mx: 'auto',
 
    textAlign: 'center',
    mb: ['40px', null, null, null, null, 7],
  },
  imageBox: {
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    marginBottom:'50px'
  },
};
