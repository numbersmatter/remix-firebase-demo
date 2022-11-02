import { XCircleIcon } from "@heroicons/react/24/outline";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import AboutArtist from "~/componets/artistProfile/AboutArtist";
import ArtistOpenForms from "~/componets/artistProfile/ArtistOpenForms";
import type { ErrorBoundInt } from "~/utils/interfaces";

export const loader: LoaderFunction = async ({ params }) => {
  const artistId = params.artistId ? params.artistId : "undefined";
  let promises = [];
  const aboutArtistPromiseRes = fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artist/${artistId}`
  );
  const openFormsPromiseRes = fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artist/${artistId}/openForms`
  );

  promises.push(aboutArtistPromiseRes);
  promises.push(openFormsPromiseRes);

  const dataCalls = await Promise.all(promises);
  const aboutArtistCall = await dataCalls[0].json();
  const openFormsCall =  await dataCalls[1].json();

  const sendData = {
    aboutArtistCall: aboutArtistCall,
    openFormsCall: openFormsCall,
  }

  return sendData;
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let {_action, batchId, artistId, ...values} = Object.fromEntries(formData);
  

  const cartPostBody = {
    batchId: batchId
  };

  const res = await fetch("http://127.0.0.1:5001/component-sites/us-central1/app/posts", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartPostBody),
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

  const newCartId: string = res.data.cartId
  const redirectPath = `/artist/${artistId}/commission-request/${newCartId}`

  return redirect(redirectPath);
};

export function ProfileStore() {
  const { openFormsCall, aboutArtistCall } = useLoaderData();

  const {aboutArtistData} = aboutArtistCall;
  const {artistOpenFormsData} = openFormsCall;
 

  return (
    <>
      <AboutArtist data={aboutArtistData} />
      <ArtistOpenForms data={artistOpenFormsData} />
    </>
  );
}

export function ErrorBoundary(params: ErrorBoundInt) {
  const { error } = params;
  return (
    <div className="rounded-md border mx-auto  bg-red-400 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-700" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {error.name}
          </h3>
          <div className="mt-2 text-sm text-red-700">
           {error.message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileStore;
