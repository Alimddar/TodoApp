import { ApiProperty } from '@nestjs/swagger';
export class TaskUpdateDTO {
  @ApiProperty()
  user_id?: number;

  @ApiProperty()
  title?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  is_completed?: boolean;
}
