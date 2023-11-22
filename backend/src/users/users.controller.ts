import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UserCreateDTO } from './dto/create-user.dto';
import { UserUpdateDTO } from './dto/update-user.dto';
import { MailService } from '../mail/mail.service';
import EmailDto from 'src/mail/dto/create.email';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UserService,
    private readonly mailService: MailService,
  ) {}

  @Post()
  create(@Body() createUserDto: UserCreateDTO) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserUpdateDTO) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  @Post('send')
  async sendEmail(@Body() emailDto: EmailDto) {
    await this.mailService.sendMail(
      emailDto.to,
      emailDto.subject,
      emailDto.text,
      emailDto.html,
    );
    return { message: 'Email sent successfully' };
  }
}
