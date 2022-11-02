/* eslint-disable @typescript-eslint/no-unused-vars */
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";
import AboutArtist from "~/componets/artistProfile/AboutArtist";
import ArtistFAQ from "~/componets/artistProfile/ArtistFAQs";
import ArtistOpenForms from "~/componets/artistProfile/ArtistOpenForms";
import ProfileHeader from "~/componets/ProfileHeader";
import { getArtistData } from "~/fetch/artistProfile";
import type {ArtistAboutData, ProfileHeaderData} from "~/utils/interfaces";



interface LoaderArtistData {
  profileHeaderData: ProfileHeaderData;
  aboutArtistData: ArtistAboutData;
  exists: boolean;
}

// type LoaderData = {
//   profileHeaderData: Awaited<ReturnType<typeof ProfileHeaderData>>;
// };

export const loader: LoaderFunction = async ({ params }) => {
  const artistId = params.artistId ? params.artistId : "undefined";
  let res = await fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artist/${artistId}`
  );

  const responseData = await res.json();
  const exists: boolean = responseData.exists;

  if (!exists) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return responseData;

  // const profileHeaderData: ProfileHeaderData = {
  //   avatarImg:
  //     "http://localhost:9199/v0/b/component-sites.appspot.com/o/user%2FwuubAl1Ny8NUJ9hGqj0xVlDPixNl%2FpublicImages%2Ftestavatar.png?alt=media&token=7c39ed90-6658-41a4-8e36-1130438af539",
  //   displayName: "No Profile",
  //   bannerImage:
  //     "https://firebasestorage.googleapis.com/v0/b/fm-mvp6.appspot.com/o/website-assets%2FFMBg.jpg?alt=media&token=03c6d6e5-0802-4165-b03d-14ef3d3b30c5",
  //   headerString: "TheFurryMarketplace.com",
  //   profileHeadline: "",
  // };

  // const staticData: LoaderArtistData = {
  //   profileHeaderData: profileHeaderData,
  //   exists: true,
  // };
};

export default function ArtistId() {
  const {profileHeaderData, aboutArtistData} = useLoaderData() as LoaderArtistData;

  return (
    <div className="min-h-screen bg-[#2a9bb5] flex flex-col ">
      <ProfileHeader data={profileHeaderData} />
      <div className="max-w-7xl mx-auto w-full mb-2 sm:px-6 lg:px-8 grow ">
        {/* Content goes here */}
        <div className="rounded-lg border-2 mb-3 bg-white">
          <Outlet />
          {/* <ArtistOpenForms data={artistOpenFormsData} /> */}
          {/* <ArtistFAQ faqs={faqsData} /> */}
        </div>
      </div>
      {/* <ArtistShopFooter /> */}
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
      <h2>Something Went wrong getting that artist's data</h2>
    </div>
  );
}

export function CatchBoundary() {
  const params = useParams();
  return (
    <div>
      <div className="flex flex-shrink-0 justify-center">
        <a href="/" className="inline-flex">
          <span className="sr-only">Your Company</span>
          <img
            className="h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="py-16">
        <div className="text-center">
          <p className="text-base text-white font-semibold ">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found.
          </h1>
          <p className="mt-2 text-base text-white">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
