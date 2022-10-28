/* eslint-disable @typescript-eslint/no-unused-vars */
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import AboutArtist from "~/componets/artistProfile/AboutArtist";
import ArtistFAQ from "~/componets/artistProfile/ArtistFAQs";
import ArtistOpenForms from "~/componets/artistProfile/ArtistOpenForms";
import ProfileHeader from "~/componets/ProfileHeader";

interface ProfileHeaderData {
  avatarImg: string;
  displayName: string;
  bannerImage: string;
  headerString: string;
  profileHeadline: string;
}

// type LoaderData = {
//   profileHeaderData: Awaited<ReturnType<typeof ProfileHeaderData>>;
// };

export const loader: LoaderFunction = async ({ params }) => {
  const artistId = params.artistId ? params.artistId : "undefined";

  const res = await fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artistId/${artistId}`
  );
  return json( await res.json());
};

export default function ArtistId() {
  const { 
    profileHeaderData, 
    // aboutArtistData, 
    // artistOpenFormsData, 
    // faqsData
   } = useLoaderData();

  return (
    <div className="min-h-screen bg-[#2a9bb5] flex flex-col ">
      <ProfileHeader data={profileHeaderData} />
      <div className="max-w-7xl mx-auto w-full mb-2 sm:px-6 lg:px-8 grow ">
        {/* Content goes here */}
        {/* <div className="rounded-lg border-2 mb-3 bg-white">
          <AboutArtist data={aboutArtistData}/>
          <ArtistOpenForms data={artistOpenFormsData} />
          <ArtistFAQ faqs={faqsData} />
        </div> */}
      </div>
      {/* <ArtistShopFooter /> */}
    </div>
  );
};

interface ErrorBoundInt {
  error: Error
}

export function ErrorBoundary( params: ErrorBoundInt) {
  const {error} = params;
  return (
    <div>
      <h2>Something Went wrong getting that artist's data</h2>
    </div>
  );
}