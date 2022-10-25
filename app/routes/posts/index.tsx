import type { LoaderFunction } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

interface Post {
  body: string,
  slug: string,
  title: string
}

export const loader: LoaderFunction = async () => {
  const res = await fetch("http://127.0.0.1:5001/component-sites/us-central1/callGetPosts")
  return json( await res.json());
};

export default function PostsIndexRoute() {
  const posts = useLoaderData() as Post[];
  return (
    <div>
      <p>Here's a list of posts:</p>
      <p>
        testing list now
      </p>
      <ul>
        {
          posts.map((post)=> (
            <li key={post.slug}>{post.title}</li>

          ))
        }
        <li>post title 2</li>
      </ul>
    </div>
  );
}