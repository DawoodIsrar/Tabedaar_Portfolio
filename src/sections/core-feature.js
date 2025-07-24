import { Container, Box, Text, Heading, Button } from 'theme-ui';

const data = {
  subTitle: '🚚 Core Services',
  title: 'All-in-One Local Delivery Solution for Your Daily Needs',
  description:
    'From ride bookings to groceries, medicine to meals — Tabedaar connects you with essential services across Malakand region. Affordable, fast, and trusted!',
  btnName: 'Explore Services',
  btnURL: '#services',
};

export default function CoreFeature() {
  return (
    <Box  sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <Heading as="h3" sx={styles.subTitle}>{data.subTitle}</Heading>
          <Heading as="h2" sx={styles.title}>{data.title}</Heading>
          <Text sx={styles.description}>{data.description}</Text>
          <Button as="a" href={data.btnURL} variant="primary" sx={styles.button}>
            {data.btnName}
          </Button>
        </Box>

        <Box sx={styles.thumbnail}>
          <Text sx={styles.emoji}>📦🛵</Text>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
  },
  subTitle: {
    color: 'primary',
    fontSize: 2,
    fontWeight: 'bold',
    mb: 2,
  },
  title: {
    fontSize: [4, 5, 6],
    fontWeight: 'bold',
    color: 'heading',
    lineHeight: 1.4,
    mb: 3,
  },
  description: {
    fontSize: 2,
    color: 'text',
    lineHeight: 1.9,
    mb: 4,
  },
  button: {
    mt: 3,
  },
  thumbnail: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['64px', '96px'],
    ml: [0, null, 5],
    mt: ['20px', null, 0],
  },
  emoji: {
    fontSize: ['80px', '100px'],
  },
};
