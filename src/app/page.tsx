import Image from "next/image";

async function getPosts() {
  const res = await fetch("http://localhost:3001/api/v1/posts", { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <main>
    <h1>Blog Posts</h1>
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </main>
  );
}
