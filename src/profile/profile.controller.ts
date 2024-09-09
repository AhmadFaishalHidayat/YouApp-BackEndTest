import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateUserProfileDto, UpdateUserProfileDto } from './dto/profile.dto';

@Controller('api')
export class ProfileController {
  constructor(private readonly userProfileService: ProfileService) {}

  @Post('/profile')
  async createUserProfile(@Body() createUserProfileDto: CreateUserProfileDto) {
    return this.userProfileService.createUserProfile(createUserProfileDto);
  }

  @Get('/profile/:id')
  async getUserProfile(@Param('id') id: string) {
    return this.userProfileService.getUserProfile(id);
  }

  @Put('/profile/:id')
  async updateUserProfile(
    @Param('id') id: string,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.userProfileService.updateUserProfile(id, updateUserProfileDto);
  }
}
