export interface ProfileHeaderData {
  avatarImage: string;
  displayName: string;
  bannerImage: string;
  headerString: string;
  profileHeadline: string;
}

export interface ArtistAboutData {
  accountName: string;
  featuredArt: string;
  aboutText: string;
}

interface AllClosedData {
  closedImage: string,
};

export interface ArtistOpenFormsData {
  openForms:  FormCardData[],
  allClosedData: AllClosedData ;
}


export interface FormCardData {
  formName: string,
  description: string,
  requestLink: string,
}

export interface ErrorBoundInt {
  error: Error;
}
