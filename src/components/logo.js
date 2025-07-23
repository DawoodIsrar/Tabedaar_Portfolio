import { Link } from 'components/link';
import Image from 'next/image';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      style={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        zoom: '0.8',
        width:"80px",
        height:"80px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...rest}
    >
      <Image src={src} width={80} height={80} alt="startup landing logo" />
    </Link>
  );
}
