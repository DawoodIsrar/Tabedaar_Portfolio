import { Inter } from 'next/font/google'
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Tabedaar Delivery Services",
  description: "Reliable, fast, and affordable delivery across your city – groceries, food, and more at your doorstep.",
  keywords: [
  "Tabedaar",
  "Tabedaar Delivery",
  "Tabedaar Services",
  "Tabedaar Pakistan",
  "Tabedaar Malakand",
  "Fast Delivery Pakistan",
  "Fast Delivery Malakand",
  "Online Grocery Delivery",
  "Food Delivery Service",
  "Restaurant Delivery",
  "Local Food Delivery",
  "Tiffin Service",
  "Lunch Box Delivery",
  "Same Day Grocery",
  "Samosa Delivery",
  "Biryani Delivery",
  "Chowmein Delivery",
  "Snacks Delivery",
  "Chips and Cold Drink Delivery",
  "Grocery to Doorstep",
  "Grocery to Home",
  "Medicine Delivery Pakistan",
  "Urgent Parcel Delivery",
  "Quick Document Delivery",
  "Local Courier Services",
  "WhatsApp Orders Delivery",
  "WhatsApp Grocery Orders",
  "WhatsApp Food Orders",
  "Delivery Booking Malakand",
  "Affordable Delivery Service",
  "Tabedaar Onboarding",
  "Restaurant Onboarding Service",
  "Shopkeeper Onboarding",
  "Vendor Onboarding",
  "Rider Jobs in Malakand",
  "Rider Hiring Tabedaar",
  "Work with Tabedaar",
  "Delivery Jobs Pakistan",
  "Grocery Delivery Rider",
  "Malakand Local Delivery",
  "Ali Plaza Delivery Hub",
  "Tabedaar Head Office",
  "Pakistan Delivery App",
  "Grocery App Pakistan",
  "Order on WhatsApp",
  "Express Home Delivery",
  "Malakand Delivery Service",
  "Fast Delivery for Restaurants",
  "Pickup and Drop Service",
  "1km for 25 rupees",
  "Reliable Delivery Partner",
  "Logistics Partner Pakistan",
  "All-in-One Delivery Service"
],
  authors: [{ name: "Tabedaar Team", url: "https://tabedaars.com" }],
  creator: "Tabedaar Delivery Services",
  openGraph: {
    title: "Tabedaar Delivery Services",
    description: "Reliable, fast, and affordable delivery across your city – groceries, food, and more at your doorstep.",
    url: "https://tabedaars.com",
    siteName: "Tabedaar",
    images: [
      {
        url: `https://tabedaars.com/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Tabedaar Delivery – Fast, Local, Trusted",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tabedaar Delivery Services",
    description: "Reliable, fast, and affordable delivery across your city – groceries, food, and more at your doorstep.",
    images: {
      url: `https://tabedaars.com/opengraph-image.png`,
      width: 1200,
      height: 630,
    },
    creator: "@tabedaar_official",
  },
  metadataBase: "https://tabedaars.com",
  alternates: {
    canonical: "https://tabedaars.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
