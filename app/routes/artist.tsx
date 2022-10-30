import { Outlet } from "@remix-run/react";
import TopNavBar from "~/componets/appShell/TopNavBar";

export default function ArtistLayoutRoute() {
  return (
    <>
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-semibold leading-6 text-gray-900">
          Meet an Artist!
        </h1>
      </div>
    </header>
    <main className="flex-1 bg-[#2a9bb5] flex flex-col">
        {/* Replace with your content */}
        <Outlet />
        {/* /End replace */}
    </main>
    </>
  );
}
