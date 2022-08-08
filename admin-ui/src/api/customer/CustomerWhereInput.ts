import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";

export type CustomerWhereInput = {
  companyName?: StringNullableFilter;
  contactName?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  properties?: PropertyListRelationFilter;
  website?: StringNullableFilter;
};
