import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PropertyUpdateInput = {
  active?: boolean | null;
  addressCity?: string | null;
  addressCountry?: string | null;
  addressLine1?: string;
  addressLine2?: string | null;
  addressPostcode?: string | null;
  ownerId?: CustomerWhereUniqueInput | null;
  purchaseDate?: Date | null;
  sellDate?: Date | null;
};
