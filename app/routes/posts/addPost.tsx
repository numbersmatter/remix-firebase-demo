import type { ActionFunction, LoaderFunction } from "@remix-run/node"; // or cloudflare/deno
import { redirect } from "@remix-run/node"; // or cloudflare/deno
import { ValidatedForm, validationError } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { TextFormInput } from "~/componets/TextFormInputs";
import { FormSubmitButton } from "~/componets/FormSubmitButton";
import { TextAreaFormInput } from "~/componets/TextAreaFormInput";

interface Post {
  body: string;
  slug: string;
  title: string;
}

interface PostResponse {
  status: "success" | "error",
  data: any
}

export const validator = withZod(
  z.object({
    title: z.string().min(1, { message: "Title is required" }),
    slug: z.string().min(1, { message: "Slug is required" }),
    body: z
      .string()
      .min(1, { message: "Body is required" }),
  })
);

export const action: ActionFunction = async ({request}) => {
  const result = await validator.validate(
    await request.formData()
  );

  if (result.error) {
    // validationError comes from `remix-validated-form`
    return validationError(result.error);
  }

  const { title, slug, body } = result.data;
  // Do something with the data

  const postData = {
    title: title,
    slug: slug,
    body: body
  };

  const res = await fetch("http://127.0.0.1:5001/component-sites/us-central1/app/posts", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
  .then((response) =>  {
    const responseObJ ={
      status: "success",
      data:response.json()
    }
    return responseObJ;
  
  })
  .catch(error => {
    const errorObj = { 
      status: "error",
      data: error
    }
    return errorObj
  })

  return redirect(`/posts/`)
    
  
  
};

export default function PostsIndexRoute() {
  
  return (
    <ValidatedForm
      className="mx-3 px-2 py-5 border space-y-8 divide-y divide-gray-200"
      validator={validator}
      method="post"
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <TextFormInput name="title" label="Title" />
            <TextFormInput name="slug" label="Slug" />
            <TextAreaFormInput name="body" label="Body" />
          </div>

          <FormSubmitButton />
        </div>
      </div>
    </ValidatedForm>
  );
}
