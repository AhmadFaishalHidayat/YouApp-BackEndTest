import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from './schemas/profile.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserProfileDto, UpdateUserProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<Profile>,
  ) {}

  async createUserProfile(
    createUserProfileDto: CreateUserProfileDto,
  ): Promise<Profile> {
    const createdProfile = new this.profileModel(createUserProfileDto);
    return await createdProfile.save();
  }

  async getUserProfile(id: string): Promise<Profile> {
    const profile = await this.profileModel.findById(id).exec();
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  async updateUserProfile(
    id: string,
    updateUserProfileDto: UpdateUserProfileDto,
  ): Promise<Profile> {
    const updatedProfile = await this.profileModel
      .findByIdAndUpdate(id, { $set: updateUserProfileDto }, { new: true })
      .exec();
    if (!updatedProfile) {
      throw new NotFoundException('Profile not found');
    }
    return updatedProfile;
  }
}
