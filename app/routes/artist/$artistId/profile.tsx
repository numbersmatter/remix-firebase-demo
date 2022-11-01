import { XCircleIcon } from "@heroicons/react/24/outline";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ArtistOpenForms from "~/componets/artistProfile/ArtistOpenForms";
import type { ErrorBoundInt } from "~/utils/interfaces";

export const loader: LoaderFunction = async ({ params }) => {
  const artistId = params.artistId ? params.artistId : "undefined";
  let res = await fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artist/${artistId}/openForms`
  );

  const responseData = await res.json();

  return responseData;
};

export const action: ActionFunction = async ({ request})=>{
  let formData = await request.formData();

  return ({})
}


export function ProfileStore() {
  const { artistOpenFormsData} = useLoaderData();
  return (
    <ArtistOpenForms data={artistOpenFormsData}/>
  );
};

export function ErrorBoundary(params: ErrorBoundInt) {
  const { error } = params;
  return (
    <div className="rounded-md border mx-auto  bg-red-400 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <XCircleIcon className="h-5 w-5 text-red-700" aria-hidden="true" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800">There was an error loading artist forms</h3>
        <div className="mt-2 text-sm text-red-700">
          <ul role="list" className="list-disc space-y-1 pl-5">
            <li>Your password must be at least 8 characters</li>
            <li>Your password must include at least one pro wrestling finishing move</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProfileStore;