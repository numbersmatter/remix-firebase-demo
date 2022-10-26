/* eslint-disable-next-line */
export interface SendToFurryMarketProps {}

export function SendToFurryMarket(props: SendToFurryMarketProps) {
  return (
    <div className="flex flex-col w-100 h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <img
          src='https://firebasestorage.googleapis.com/v0/b/component-sites.appspot.com/o/furrymarketplace%2FKanvas%20drawing%20banner.png?alt=media&token=d7c93657-f389-495d-b525-6efede812e80'
          alt="confirmation"
          className="h-80  w-auto object-center mt-0 mx-auto "
        />
        <div className="text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Are you a furry artist?</h2>
          <p className="mt-1 text-4xl tracking-tight font-bold text-slate-700 sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight">
            Want your own store?
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Go to
          </p>
          <a href='https://thefurrymarketplace.com/' className="max-w-xl mt-5 underline mx-auto text-xl text-blue-500">
            TheFurryMarketplace.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default SendToFurryMarket;
