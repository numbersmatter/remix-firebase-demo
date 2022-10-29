export async function getArtistData(artistId: string) {
  let response = await fetch(
    `http://127.0.0.1:5001/component-sites/us-central1/app/artistId/${artistId}`
  );
  // let res = await fetch(`https://api.github.com/orgs/${searchCompany}/members`);
  return response;
}
