import { Customer } from "../customer/Customer";

export type Property = {
  active: boolean | null;
  addressCity: string | null;
  addressCountry: string | null;
  addressLine1: string;
  addressLine2: string | null;
  addressPostcode: string | null;
  createdAt: Date;
  id: string;
  ownerId?: Customer | null;
  purchaseDate: Date | null;
  sellDate: Date | null;
  updatedAt: Date;
};
