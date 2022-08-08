import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="CompanyName" source="companyName" />
        <TextField label="ContactName" source="contactName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EmailAddress" source="emailAddress" />
        <TextField label="ID" source="id" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Website" source="website" />
      </Datagrid>
    </List>
  );
};
