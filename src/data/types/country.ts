export interface countryType {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  translations: {
    [key: string]: {
      common: string;
      official: string;
    };
  }
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  flag: string;
  capital: string[];
  maps: {
    googleMaps: string;
  };
}
