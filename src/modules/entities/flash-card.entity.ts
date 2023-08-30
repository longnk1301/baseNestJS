import { BaseEntity } from '@modules/shared/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FlashCardDocument = HydratedDocument<FlashCard>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class FlashCard extends BaseEntity {
  @Prop()
  vocabulary: string;

  @Prop({
    default:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  })
  image: string;

  @Prop()
  definition: string;

  @Prop()
  meaning: string;

  @Prop()
  pronunciation: string;

  @Prop()
  examples: string;

  @Prop()
  order: number;

  @Prop()
  isPublic: boolean;
}

export const FlashCardSchema = SchemaFactory.createForClass(FlashCard);
