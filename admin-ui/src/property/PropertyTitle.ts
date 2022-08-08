import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "addressCity";

export const PropertyTitle = (record: TProperty): string => {
  return record.addressCity || record.id;
};
