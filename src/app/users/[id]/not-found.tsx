import React from 'react';

export default function NotFound() {
  // not found page for user with tailwindcss
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>User not found</h1>
      <p className='text-gray-500'>The reqeusted user does not exist</p>
    </div>
  );
}
