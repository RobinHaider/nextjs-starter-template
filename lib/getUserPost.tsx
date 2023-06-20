export default async function getUserPost(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!res.ok) throw new Error('Failed to fetch data from server');

  return res.json();
}