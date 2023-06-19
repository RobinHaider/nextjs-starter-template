import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

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
        <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <span className='font-semibold text-xl tracking-tight'>
              <Link href='/'>{metadata.title}</Link>
            </span>
          </div>
          <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V5C20 6.65685 18.6569 8 17 8H3C1.34315 8 0 6.65685 0 5V3ZM3 10C1.34315 10 0 11.3431 0 13V15C0 16.6569 1.34315 18 3 18H17C18.6569 18 20 16.6569 20 15V13C20 11.3431 18.6569 10 17 10H3ZM3 16C2.44772 16 2 15.5523 2 15C2 14.4477 2.44772 14 3 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H3Z'
                />
              </svg>
            </button>
          </div>
          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'></div>
            <div>
              <Link
                href='/about'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
              >
                About
              </Link>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
              >
                Examples
              </a>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
              >
                Blog
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
