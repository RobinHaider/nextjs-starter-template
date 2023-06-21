export default async function getUserPost(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return undefined;

  return res.json();
}
