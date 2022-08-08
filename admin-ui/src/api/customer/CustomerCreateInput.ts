import { PropertyCreateNestedManyWithoutCustomersInput } from "./PropertyCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  companyName?: string | null;
  contactName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyCreateNestedManyWithoutCustomersInput;
  website?: string | null;
};
