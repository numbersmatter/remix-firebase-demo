import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  const artistId = params.artistId ? params.artistId : "undefined";
  const cartId = params.cartId ? params.cartId : "undefined";
  let res = await fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artist/${artistId}/carts/${cartId}`
  );

  const responseData = await res.json();
  const exists: boolean = responseData.exists;

  if (!exists) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return responseData;

};



export default function CartId(){
  const {formDocData} = useLoaderData();

  
  return (
    <div className="py-2 px-4">
      <h4>Form Name:{formDocData.formName}</h4>
      <p>{formDocData.description}</p>
      <Outlet />
    </div>
  )
}