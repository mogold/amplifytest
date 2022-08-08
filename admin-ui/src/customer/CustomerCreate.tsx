import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PropertyTitle } from "../property/PropertyTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CompanyName" source="companyName" />
        <TextInput label="ContactName" source="contactName" />
        <TextInput label="EmailAddress" source="emailAddress" type="email" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="properties"
          reference="Property"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PropertyTitle} />
        </ReferenceArrayInput>
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Create>
  );
};
