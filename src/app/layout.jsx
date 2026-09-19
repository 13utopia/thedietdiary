import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipLink from '../components/SkipLink';

export const metadataBase = new URL('https://thedietdiary.in');

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Shivangi Pancholi | Expert Nutritionist & Dietitian for a Healthier You',
  description: 'Shivangi Pancholi, a certified Nutritionist & Dietitian, helps you achieve your health goals with personalized diet plans and expert nutrition advice.',
  openGraph: {
    title: 'Shivangi Pancholi | Expert Nutritionist & Dietitian',
    description: 'Personalized nutrition, gut health, and sustainable diet plans.',
    url: 'https://thedietdiary.in/',
    siteName: 'The Diet Diary',
    images: [
      {
        url: '/website-images/Untitled-design-2024-08-05T125025_290.webp',
        width: 1150,
        height: 1500,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
