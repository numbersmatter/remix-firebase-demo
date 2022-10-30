import type { ArtistOpenFormsData } from "~/utils/interfaces";
import FormCard from "./FormCard";


/* eslint-disable-next-line */
export interface ArtistOpenFormsProps {
  data: ArtistOpenFormsData;

}

export function ArtistOpenForms(props: ArtistOpenFormsProps) {
  const { openForms, allClosedData } = props.data;




  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl lg:text-5xl">Custom Commissions</h2>
            <p className="mt-4 text-xl text-gray-600">
              {/* With Mila or customer OC characterxs */}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {
              openForms.length < 0 
              ? <img className='h-72 mx-auto w-auto ' alt="Store Closed" src={allClosedData.closedImage}/>
              : openForms.map( (formCard) => <FormCard key={formCard.requestLink} data={formCard}/> )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistOpenForms;
