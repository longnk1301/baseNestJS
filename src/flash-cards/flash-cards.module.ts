import { Module } from '@nestjs/common';
import { FlashCardsService } from './flash-cards.service';
import { FlashCardsController } from './flash-cards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FlashCard,
  FlashCardSchema,
} from '@modules/entities/flash-card.entity';

@Module({
  controllers: [FlashCardsController],
  providers: [FlashCardsService],
  imports: [
    MongooseModule.forFeature([
      { name: FlashCard.name, schema: FlashCardSchema },
    ]),
  ],
})
export class FlashCardsModule {}
