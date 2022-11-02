import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { FormSubmitButton } from "~/componets/FormSubmitButton";
import { TextAreaFormInput } from "~/componets/TextAreaFormInput";
import { TextFormInput } from "~/componets/TextFormInputs";
import { z } from "zod";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";


export const loader: LoaderFunction = async ({ params }) => {
  const artistId = params.artistId ? params.artistId : "undefined";
  const cartId = params.cartId ? params.cartId : "undefined";
  const questionId = params.questionId ? params.questionId : "undefined"
  let res = await fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artist/${artistId}/carts/${cartId}/${questionId}`
  );

  const responseData = await res.json();


  return responseData;

};



export const validator = withZod(
  z.object({
    title: z.string().min(1, { message: "Title is required" }),
  })
);

const constructTextValidator = ( fieldName: string, minLength: number, minMessage: string| undefined) =>{

  return withZod(
    z.object({
      [fieldName]: z.string().min(minLength, { message: minMessage }),
    }));
}

export default function QuestionIdForm() {
  const {questionBasic} = useLoaderData();

  return (
    <div
      className="mx-3 px-2 py-5 border space-y-8 divide-y divide-gray-200"
    >

      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {questionBasic.questionName}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
             {questionBasic.prompt}
            </p>
          </div>
    <ValidatedForm
      validator={validator}
      method="post"
      >
          <div className="space-y-6 sm:space-y-5">
            <TextFormInput name="title" label="Title" />
            <TextFormInput name="slug" label="Slug" />
            <TextAreaFormInput name="body" label="Body" />
          </div>

          <FormSubmitButton />
    </ValidatedForm>
        </div>
      </div>
      </div>
  );
}
