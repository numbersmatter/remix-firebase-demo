import { makeDomainFunction } from 'domain-functions';
import { z}  from 'zod';

interface Post {
  body: string;
  slug: string;
  title: string;
}

const basePostsUrl = "http://127.0.0.1:5001/component-sites/us-central1/app/posts"

export const addPostSchema =z.object({
  title: z.string().min(1, { message: "Title is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  body: z
    .string()
    .min(1, { message: "Body is required" }),
})

export const sendPostToAddPostURL = (post: Post)=> {
  
  return fetch(basePostsUrl, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })

}



export const addPost = makeDomainFunction(addPostSchema)(async (values) => (
  await sendPostToAddPostURL(values) /* or anything else */
))