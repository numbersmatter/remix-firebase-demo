import type { LoaderFunction } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

interface Post {
  body: string,
  slug: string,
  title: string
}

export const loader: LoaderFunction = async ({params}) => {
  const slugValue = params.slug ? params.slug : "undefined"

  const res = await fetch(`http://127.0.0.1:5001/component-sites/us-central1/app/posts/${slugValue}`)
  return json( await res.json());
};

export default function PostsIndexRoute() {
  const post = useLoaderData() as Post;
 
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        {post.body}
      </p>
      
    </div>
  );
}