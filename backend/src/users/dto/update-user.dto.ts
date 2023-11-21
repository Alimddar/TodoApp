import { ApiProperty } from '@nestjs/swagger';
export class UserUpdateDTO {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  surname?: string;

  @ApiProperty()
  username?: string;

  @ApiProperty()
  password?: string;

  @ApiProperty()
  email?: string;
}
