import { cx } from '@/utils';
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import siteMetadata from '@/utils/siteMetaData';
import ThemeScript from './ThemeScript';
import App from './App';

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" });
const manRope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr" });

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      siteMetadata.socialBanner
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true, //enable search engine to check my blog
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner], // Must be an absolute URL
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manRope.variable, "font-mr bg-gray-100 dark:bg-dark h-screen w-full")}>
        <ThemeScript/>
        <App children={children}/>
      </body>
    </html>
  )
}
