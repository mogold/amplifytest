import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  companyName?: SortOrder;
  contactName?: SortOrder;
  createdAt?: SortOrder;
  emailAddress?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
