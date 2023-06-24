import React from 'react';
import Search from './components/Search';

export const metadata = {
  title: 'Next.js Starter | Wiki',
  description: 'Next.js starter template Wiki page',
};

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center  p-24'>
        <h1 className='text-4xl font-bold text-center mb-5'>Wiki Page</h1>
        <div className='mb-5'>
          <Search />
        </div>

        {children}
      </main>
    </>
  );
}
