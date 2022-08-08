import { PropertyUpdateManyWithoutCustomersInput } from "./PropertyUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  companyName?: string | null;
  contactName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyUpdateManyWithoutCustomersInput;
  website?: string | null;
};
