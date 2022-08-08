import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PropertyWhereInput = {
  active?: BooleanNullableFilter;
  addressCity?: StringNullableFilter;
  addressCountry?: StringNullableFilter;
  addressLine1?: StringFilter;
  addressLine2?: StringNullableFilter;
  addressPostcode?: StringNullableFilter;
  id?: StringFilter;
  ownerId?: CustomerWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
  sellDate?: DateTimeNullableFilter;
};
