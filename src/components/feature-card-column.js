import { Box, Heading, Text } from 'theme-ui';

export default function FeatureCardColumn({
  src,
  altText = 'icon',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Box as="span" aria-label={altText} role="img" sx={styles.icon}>
        {src}
      </Box>
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    bg: 'white',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
    p: 4,
    maxWidth: 280,
    mx: 'auto',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.1)',
    },
  },
  icon: {
    fontSize: '48px',
    mb: 3,
    color: 'primary',
    display: 'inline-block',
  },
  wrapper: {
    title: {
      fontSize: 3,
      fontWeight: 700,
      color: 'heading_secondary',
      mb: 2,
    },
    subTitle: {
      fontSize: 1,
      color: 'text_secondary',
      lineHeight: '1.8',
    },
  },
};
