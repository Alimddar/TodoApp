import { ApiProperty } from '@nestjs/swagger';
export class TaskCreateDTO {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  is_completed: boolean;
}
