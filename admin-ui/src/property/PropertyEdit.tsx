import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <TextInput label="AddressCity" source="addressCity" />
        <TextInput label="AddressCountry" source="addressCountry" />
        <TextInput label="AddressLine1" source="addressLine1" />
        <TextInput label="AddressLine2" source="addressLine2" />
        <TextInput label="AddressPostcode" source="addressPostcode" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="OwnerID"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="PurchaseDate" source="purchaseDate" />
        <DateTimeInput label="SellDate" source="sellDate" />
      </SimpleForm>
    </Edit>
  );
};
