import type { ActionFunction, LoaderFunction } from "@remix-run/node"; // or cloudflare/deno
import { Form as RemixForm} from 'remix-forms'
import { redirect } from "@remix-run/node"; // or cloudflare/deno

import { makeDomainFunction, inputFromForm } from 'domain-functions'

import { addPostSchema, sendPostToAddPostURL, addPost } from "~/controllers/postsControllers";



export const action: ActionFunction = async ({request}) => {
  const addPost = makeDomainFunction(addPostSchema)(async (values) => (
    await sendPostToAddPostURL(values) /* or anything else */
  ));

  const result = await addPost(await inputFromForm(request));

  if(!result.success){
    return result
  }
  
  return redirect(`/posts/`)
};

export default function PostsAddPostRoute() {
  
  return <RemixForm schema={addPostSchema}  />
    
}
