import { Roboto, Roboto_Mono } from 'next/font/google';
import "./globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';  // Add this import
import { AppProvider } from "@/components/AppContext";
import { Toaster } from 'react-hot-toast';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: "Olfiausa",
  description: "Everything better with a touch of Fragrance",
  icons: {
    icon: '/logo-libe.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <main className='max-w-4xl mx-auto p-4'>
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}