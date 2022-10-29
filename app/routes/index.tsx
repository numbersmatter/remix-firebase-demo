import TopNavBar from "~/componets/appShell/TopNavBar";
import SendToFurryMarket from "~/componets/SendToFurryMarket";

/* eslint-disable-next-line */
export interface IndexProps {}

export function Index(props: IndexProps) {
  return (
    <div className="min-h-full">
      <TopNavBar />
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold leading-6 text-gray-900">
            Meet an Artist!
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-4 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
}

export default Index;
