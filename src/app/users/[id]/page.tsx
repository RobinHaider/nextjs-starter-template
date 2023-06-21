import getUser from '@/lib/getUser';
import getUserPost from '@/lib/getUserPost';
import React, { Suspense } from 'react';
import UserPosts from './components/UserPosts';
import { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    id: string;
  };
};

// generate metadata
export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const user: User = await getUser(id);

  if (!user) {
    return {
      title: 'User not found',
    };
  }

  return {
    title: user.name,
    description: `Page for ${user.name}`,
  };
}

export default async function UserPage({ params: { id } }: Params) {
  const userData: Promise<User> = getUser(id);
  const userPostsData: Promise<Post[]> = getUserPost(id);

  // parallel fetching
  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  // return (
  //   <div>
  //     <h1>{user.name}</h1>
  //     <ul>
  //       {userPosts.map((post) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  // sequential fetching
  const user = await userData;

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <br />
      <h2>Posts</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </div>
  );
}

// generate static params
export async function generateStaticParams() {
  const users: User[] = await getAllUsers();

  return users.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));
}
