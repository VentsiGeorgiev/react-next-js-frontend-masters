import { QueryClient } from "@tanstack/react-query";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default async function ScratchServer() {
  const queryClient = new QueryClient();
  const posts = await queryClient.fetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>
      <ul className="space-y-3">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className="rounded border p-4">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
