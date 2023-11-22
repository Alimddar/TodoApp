import { ApiProperty } from '@nestjs/swagger';

class EmailDto {
  @ApiProperty()
  to: string;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  html?: string;
}

export default EmailDto;
