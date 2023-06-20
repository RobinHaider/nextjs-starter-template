import getAllUsers from '@/lib/getAllUsers';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Users page',
};

export default async function UsersPage() {
  const userData: Promise<User[]> = getAllUsers();
  const user = await userData;

  // to know is it a server component
  console.log('rednering');

  const users = user.map((user) => (
    <li key={user.id}>
      <Link href={`/users/${user.id}`}>
        <span className='underline'>{user.name}</span>
      </Link>
      - {user.email}
    </li>
  ));

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-6xl font-bold text-center'>Users</h1>
      <ul className='text-2xl'>{users}</ul>
    </div>
  );
}
