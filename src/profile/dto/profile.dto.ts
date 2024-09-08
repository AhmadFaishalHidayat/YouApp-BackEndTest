import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  birthday: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop()
  interests: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
