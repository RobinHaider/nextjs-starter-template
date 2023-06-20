import getUser from '@/lib/getUser';
import getUserPost from '@/lib/getUserPost';
import React from 'react';

type Params = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params: { id } }: Params) {
  const userData: Promise<User> = getUser(id);
  const userPostsData: Promise<Post[]> = getUserPost(id);

  const [user, userPosts] = await Promise.all([userData, userPostsData]);

  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
