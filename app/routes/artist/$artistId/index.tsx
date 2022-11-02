import { redirect } from "@remix-run/node";
import ArtistOpenForms from "~/componets/artistProfile/ArtistOpenForms";
import { ErrorBoundInt } from "~/utils/interfaces";

export const loader =async ()=> {
   return redirect("profile")
}

export function ArtistIndexRoute() {
  return (
    <div></div>
  );
};

export function ErrorBoundary(params: ErrorBoundInt) {
  const { error } = params;
  return (
    <div>
      <h2> Oh no! Artist forms did not load</h2>
    </div>
  );
}

export default ArtistIndexRoute;