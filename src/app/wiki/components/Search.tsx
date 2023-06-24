'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Search() {
  const [Search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/wiki/${Search}`);
  };
  return (
    <form
      className='w-50 flex justify-center md:justify-between text-black'
      onSubmit={handleSearch}
    >
      <input
        type='text'
        placeholder='Search'
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-50 p-3 flex justify-center md:justify-between'
      />
      <button
        className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'
        type='submit'
      >
        Search
      </button>
    </form>
  );
}
