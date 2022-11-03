import { withZod } from "@remix-validated-form/with-zod";
import { useIsSubmitting, ValidatedForm, validationError } from "remix-validated-form";
import { FormSubmitButton } from "~/componets/FormSubmitButton";
import { TextAreaFormInput } from "~/componets/TextAreaFormInput";
import { TextFormInput } from "~/componets/TextFormInputs";
import { z } from "zod";
import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { baseUrl } from "~/utils/constants";
import { HiddenInput } from "~/componets/formComponents/HiddenInput";

export const loader: LoaderFunction = async ({ params }) => {
  const artistId = params.artistId ? params.artistId : "undefined";
  const cartId = params.cartId ? params.cartId : "undefined";
  const questionId = params.questionId ? params.questionId : "undefined";
  let res = await fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artist/${artistId}/carts/${cartId}/${questionId}`
  );

  const responseData = await res.json();

  const hiddenFormValues = {
    artistId: artistId,
    cartId: cartId,
    questionId: questionId,
  }


  return { formValues: hiddenFormValues, ...responseData};
};

export const validator = withZod(
  z.object({
    "name-request": z.string().min(1, { message: "request name is required" }),
    artistId: z.string().min(1, { message: "request name is required" }),
    cartId: z.string().min(1, { message: "artistId is required" }),
    questionId: z.string().min(1, { message: "questionId is required" }),
  })
);

export const action: ActionFunction = async ({ request }) => {
  const result = await validator.validate(await request.formData());
  // const artistId2 = requ

  if (result.error) {
    // validationError comes from `remix-validated-form`
    return validationError(result.error);
  }

  const fields = result.data;
  const artistId = fields.artistId;
  const cartId = fields.cartId;
  const questionId = fields.questionId;
  // Do something with the data

  const writeData = {
    questionType: "text-input",
    textValue: fields["name-request"],
  };

  const postUrl =
    baseUrl + `artist/${artistId}/carts/${cartId}/${questionId}/response`;

  const res = await fetch(postUrl, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      questionId: questionId,
      questionResponse: writeData,
    }),
  })
  .then( async (resp)=>{
    const moreData = await resp.json()

      const responseObJ ={
        status: "success",
        data: moreData
      }
      return responseObJ
    }
  )
    .catch((error) => {
      const errorObj = {
        status: "error",
        data: error,
      };
      return errorObj;
    });

    const nextQId = res.data.data.nextQuestionId as string

    const newUrl = `artist/${artistId}/commission-requests/${cartId}/${nextQId}`
    

  return redirect(newUrl)
};

const constructTextValidator = (
  fieldName: string,
  minLength: number,
  minMessage: string | undefined
) => {
  return withZod(
    z.object({
      [fieldName]: z.string().min(minLength, { message: minMessage }),
    })
  );
};

const clientValidator = constructTextValidator("name-request", 3, undefined)

interface FormValues {
  artistId: string,
  cartId: string,
  questionId :string,
}

export default function QuestionIdForm() {
  const { questionBasic, formValues } = useLoaderData();
  const data = useActionData();

  const artistId = formValues.artistId as string ;
  const cartId = formValues.cartId as string ;
  const questionId = formValues.questionId as string 
   
  
  console.log(data)

  return (
    <div className="mx-3 px-2 py-5 border space-y-8 divide-y divide-gray-200">
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
          {
            data ?
            <div>
              <p>
                {JSON.stringify(data)}
              </p>
            </div>
            : null
          }
          <ValidatedForm 
            validator={clientValidator} 
            method="post"
            defaultValues={{
              artistId:  artistId,
              cartId: cartId,
              questionId: questionId
            }}
          >
            <div className="space-y-6 sm:space-y-5">
              <TextFormInput name={questionId} label={questionBasic.questionName} />
              <HiddenInput name="artistId" />
              <HiddenInput name="cartId" />
              <HiddenInput name="questionId" />


            </div>
            <FormSubmitButton />
          </ValidatedForm>
        </div>
      </div>
    </div>
  );
}

interface ErrorBoundInt {
  error: Error;
}

export function ErrorBoundary(params: ErrorBoundInt) {
  const { error } = params;
  return (
    <div>
      <h2>{error.name}</h2>
      <p>{error.message}</p>
    </div>
  );
}


