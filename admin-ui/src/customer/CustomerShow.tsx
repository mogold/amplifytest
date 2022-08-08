import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CompanyName" source="companyName" />
        <TextField label="ContactName" source="contactName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EmailAddress" source="emailAddress" />
        <TextField label="ID" source="id" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Website" source="website" />
        <ReferenceManyField
          reference="Property"
          target="CustomerId"
          label="Properties"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
