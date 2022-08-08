import { Property } from "../property/Property";

export type Customer = {
  companyName: string | null;
  contactName: string | null;
  createdAt: Date;
  emailAddress: string | null;
  id: string;
  phoneNumber: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
  website: string | null;
};
