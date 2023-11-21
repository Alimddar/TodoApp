import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;
}
