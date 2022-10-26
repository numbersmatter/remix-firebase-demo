/* eslint-disable-next-line */

interface ArtistAboutData {
  accountName: string;
  featuredArt: string;
  aboutText: string;
}



export interface AboutArtistProps {
  data:ArtistAboutData
}

export function AboutArtist(props: AboutArtistProps) {
  const { accountName, aboutText, featuredArt } = props.data;

  return (
    <div className="bg-transparent">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About {accountName}{' '}
            </h2>
            <p className="text-xl text-gray-500">{aboutText}</p>
          </div>
          <div className="">
            <div className="max-h-64 w-auto aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img
                className="object-cover shadow-lg rounded-lg"
                src={featuredArt}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArtist;
