"use client";
import { Box, Grid, Container, Heading, Text } from 'theme-ui';
import { Link } from 'react-scroll';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import Logo from 'assets/logo.jpg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={Logo} width={100} height={100} style={{width:"auto", height:"auto", maxWidth:"100%", borderRadius:"20%"}} alt="Logo" />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                style={{ padding: '10px' }}
                className="footer-link"
                >
                  {label}
                  </Link>
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} Tabedaar. All rights reserved.
          </Text>
        </Box>
      </Box>
    </footer>
  );
}

const styles = {
  wrapper:{
      backgroundColor: 'primary',
      color: 'white',
      width: '100%',

  },
  footer: {
      width: '100%',

      footerBottomArea: {
      width: '100% !important',
      minWidth:"100% !important",
      maxWidth: '100% !important',
      color: 'white',
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',

      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
      width: '100%',

    },
    menus: {
      cursor: 'pointer',
      mt: [3, 4],
      mb: 2,
      nav: {
      color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    link: {
      color:"white",
      fontSize: [1, '15px'],
      fontWeight: '400',
      mb: "5px",
      cursor: 'pointer !important',
      transition: 'all 0.35s !important',
      display: 'block !important',
      textDecoration: 'none !important',
      lineHeight: [1.5, null, 1.8],
      padding: '10px 15px !important',
      ':hover': {
        color: 'white',
        textSize:"50px"
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },

};
