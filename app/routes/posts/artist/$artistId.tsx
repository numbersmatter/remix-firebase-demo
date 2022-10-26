import { json, LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import AboutArtist from "~/componets/artistProfile/AboutArtist";
import ArtistFAQ from "~/componets/artistProfile/ArtistFAQs";
import ArtistOpenForms from "~/componets/artistProfile/ArtistOpenForms";
import ProfileHeader from "~/componets/ProfileHeader";

export const loader: LoaderFunction = async ({ params }) => {
  const artistId = params.artistId ? params.artistId : "undefined";

  const res = await fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/posts/${artistId}`
  );
  return json(await res.json());
};

export default function ArtistId() {
  const { profileHeaderData, aboutArtistData, artistOpenFormsData, faqsData } = useLoaderData();

  return (
    <div className="min-h-screen bg-[#2a9bb5] flex flex-col ">
      <ProfileHeader data={profileHeaderData} />
      <div className="max-w-7xl mx-auto w-full mb-2 sm:px-6 lg:px-8 grow ">
        {/* Content goes here */}
        <div className="rounded-lg border-2 mb-3 bg-white">
          <AboutArtist data={aboutArtistData}/>
          <ArtistOpenForms data={artistOpenFormsData} />
          <ArtistFAQ faqs={faqsData} />
        </div>
      </div>
      {/* <ArtistShopFooter /> */}
    </div>
  );
}
