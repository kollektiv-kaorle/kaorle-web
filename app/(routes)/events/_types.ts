export interface EventExportPayload {
  copilotUrl: string;
  id: string;
  slug: string;
  status: string;
  optionEnd?: Date;
  kind: string;
  start: Date;
  name: string;
  subTitle?: string;
  eventType: string;
  memo?: string;
  createdAt: Date;
  updatedAt: Date;
  displayNames: {
    title: string;
    eventTitleWithArtists: string;
    eventTitleWithArtistsAndShows: string;
    artists: string;
    artistsAndShows: string;
    rooms: string;
    locationsWithRooms: string;
    locationsWithCityAndRooms: string;
    locationsWithAddressAndRooms: string;
  };
  activePromotions: { name: string }[];
  images?: ExportPayloadImage[];
  files?: ExportPayloadFile[];
  links?: EventExportPayloadLink[];
  locations?: {
    name: string;
    address: EventExportPayloadAdress;
    operator?: {
      displayName: string;
      email: string;
      phone: string;
    };
    contacts?: {
      role: string;
      displayName: string;
      firstName?: string;
      lastName?: string;
      email: string;
      phone: string;
    }[];
    images: ExportPayloadImage[];
    files: ExportPayloadFile[];
    rooms?: {
      name: string;
      images?: ExportPayloadImage[];
      files?: ExportPayloadFile[];
    }[];
  }[];
  artists?: {
    name: string;
    description: string;
    deals: {
      name: string;
      description: string;
      guarantee: number;
      artistPercentage: number;
      breakEvenSales: number;
    }[];
    show?: {
      slug: string;
      name: string;
      releasesAt?: Date;
      memo?: string;
      images?: ExportPayloadImage[];
      files?: ExportPayloadFile[];
      artistShowInformations?: PublicCustomField[];
    };
    contacts?: {
      role: string;
      displayName: string;
      firstName?: string;
      lastName?: string;
      address: EventExportPayloadAdress;
      email: string;
      phone: string;
      contactInformations?: PublicCustomField[];
      bankAccounts?: EventExportPayloadBankAccount[];
    }[];
    images: ExportPayloadImage[];
    files: ExportPayloadFile[];
    links?: EventExportPayloadLink[];
    artistInformations?: PublicCustomField[];
  }[];
  contacts?: {
    role: string;
    displayName: string;
    firstName?: string;
    lastName?: string;
    address: EventExportPayloadAdress;
    email: string;
    phone: string;
    contactInformations?: PublicCustomField[];
    images?: ExportPayloadImage[];
    files?: ExportPayloadFile[];
  }[];
  schedule?: {
    name: string;
    date: Date;
  }[];
  eventInformations?: PublicCustomField[];
  offersOnEvent?: {
    offerStatus: string;
    name: string;
    description: string;
    discount: number;
    netTotal: number;
    grossTotal: number;
    netTotalByVat: Record<number, number>;
    roomsOnOffer?: {
      room: string;
      description: string;
      price: number;
      discount: number;
      vat: number;
      netTotal: number;
      grossTotal: number;
    }[];
    resourcesOnOffer?: {
      resource: string;
      description: string;
      amount: number;
      unit: string;
      price: number;
      discount: number;
      vat: number;
      netTotal: number;
      grossTotal: number;
    }[];
  }[];
  ticketing?: {
    ticketOffice: string;
    category: string;
    contingent: number;
    vat: number;
    netPrice: number;
    grossPrice: number;
    timestamp: Date;
    soldTickets: number;
    saleTotal: number;
  }[];
  shopEvent?: {
    start: Date;
    name: string;
    subTitle?: string;
    description?: string;
    location?: string;
    image?: ExportPayloadImage;
    url?: string;
  };
}

export type EventExportPayloadBankAccount = {
  bankAccountType: string;
  institute: string | null;
  username: string | null;
  owner: string | null;
  iban: string | null;
  bic: string | null;
};

export type EventExportPayloadAdress = {
  street: string;
  addStreet: string;
  zip: string;
  city: string;
  country: string;
  lat: string;
  lng: string;
};

export type EventExportPayloadLink = {
  type: string;
  value: string;
};

export type ExportPayloadImage = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  sizes: Record<string, string>;
};

export type ExportPayloadFile = {
  id: string;
  name: string;
  description: string;
  path: string;
  preview: string;
  download: string;
  tags: string[];
};

export interface PublicCustomField {
  type: CustomFieldType;
  value: unknown;
  name: string;
  tags?: string[];
}

export type CustomFieldType =
  | "textarea"
  | "number"
  | "price"
  | "select"
  | "multiselect"
  | "checkbox";

// export type ResponseBody =
//   | EventExportPayload
//   | {
//       error: {
//         code:
//           | "missingSlug"
//           | "notFound"
//           | "invalidAccessToken"
//           | "internalServerError";
//         message: string;
//         data?: any;
//       };
//     };
