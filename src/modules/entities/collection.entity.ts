import { BaseEntity } from '@modules/shared/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CollectionDocument = HydratedDocument<Collection>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Collection extends BaseEntity {
  @Prop()
  name: string;

  @Prop({
    default:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  })
  image: string;

  @Prop()
  description: string;

  @Prop()
  level: string;

  @Prop()
  totalFlashCard: string;

  @Prop()
  order: number;

  @Prop()
  isPublic: boolean;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
