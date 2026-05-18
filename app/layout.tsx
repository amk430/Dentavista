import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'DentaVista | Professional Dental Care',
  description: 'DentaVista offers premium dental care with state-of-the-art treatments. Book your appointment today.',
  openGraph: {
    title: 'DentaVista | Premium Dental Clinic',
    description: 'Professional dental care, modern treatments, and excellent customer service.',
    url: 'https://dentavista.demo',
    siteName: 'DentaVista',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630.png?text=DentaVista',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
