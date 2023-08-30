import { BaseEntity } from '@modules/shared/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserRoleDocument = HydratedDocument<UserRole>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class UserRole extends BaseEntity {
  @Prop({ required: true, minlength: 2, maxlength: 60 })
  name: string;

  @Prop({ required: true, maxlength: 60, minlength: 2 })
  description: string;
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
