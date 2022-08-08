import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active" source="active" />
        <TextField label="AddressCity" source="addressCity" />
        <TextField label="AddressCountry" source="addressCountry" />
        <TextField label="AddressLine1" source="addressLine1" />
        <TextField label="AddressLine2" source="addressLine2" />
        <TextField label="AddressPostcode" source="addressPostcode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="OwnerID"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="PurchaseDate" source="purchaseDate" />
        <TextField label="SellDate" source="sellDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
