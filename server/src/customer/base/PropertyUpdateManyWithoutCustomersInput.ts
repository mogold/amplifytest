/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PropertyWhereUniqueInput } from "../../property/base/PropertyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class PropertyUpdateManyWithoutCustomersInput {
  @Field(() => [PropertyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PropertyWhereUniqueInput],
  })
  connect?: Array<PropertyWhereUniqueInput>;

  @Field(() => [PropertyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PropertyWhereUniqueInput],
  })
  disconnect?: Array<PropertyWhereUniqueInput>;

  @Field(() => [PropertyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PropertyWhereUniqueInput],
  })
  set?: Array<PropertyWhereUniqueInput>;
}
export { PropertyUpdateManyWithoutCustomersInput };
