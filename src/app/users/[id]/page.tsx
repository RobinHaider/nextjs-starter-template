import getUser from '@/lib/getUser';
import getUserPost from '@/lib/getUserPost';
import React, { Suspense } from 'react';
import UserPosts from './components/UserPosts';

type Params = {
  params: {
    id: string;
  };
};

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
