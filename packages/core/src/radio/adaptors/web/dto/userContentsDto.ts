import { IsNumberString } from "class-validator";

export class UserContentsDto {
  @IsNumberString()
  userId: number = 0;

  @IsNumberString()
  groupId: number = 0;
}
