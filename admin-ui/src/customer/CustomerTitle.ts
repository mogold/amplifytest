import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "companyName";

export const CustomerTitle = (record: TCustomer): string => {
  return record.companyName || record.id;
};
