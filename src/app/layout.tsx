import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Starter Template',
  description: 'Next.js starter template with MUI, Tailwind CSS and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* nav bar */}
        <Navbar title={metadata.title} />
        {children}
      </body>
    </html>
  );
}
