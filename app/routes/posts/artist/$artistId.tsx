import { json, LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import ProfileHeader from "~/componets/ProfileHeader";



export const loader: LoaderFunction = async ({params}) => {
  const artistId = params.artistId ? params.artistId : "undefined"

  const res = await fetch(`http://127.0.0.1:5001/component-sites/us-central1/app/posts/${artistId}`)
  return json( await res.json());
};


export default function ArtistId() {
  const {profileHeaderData} = useLoaderData()
 

  return (
    <div className="min-h-screen bg-[#2a9bb5] flex flex-col ">
      <ProfileHeader data={profileHeaderData}/>
      <div className="max-w-7xl mx-auto w-full mb-2 sm:px-6 lg:px-8 grow ">
        {/* Content goes here */}
        <Outlet />
      </div>
      {/* <ArtistShopFooter /> */}
    </div>
  )
}