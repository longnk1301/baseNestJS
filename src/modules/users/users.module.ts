import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { UserSchemaFactory, User, UserSchema } from './entities/user.entity';
import {
  FlashCard,
  FlashCardSchema,
} from '@modules/flash-cards/entities/flash-card.entity';
import {
  Collection,
  CollectionSchema,
} from '@modules/collection/entities/collection.entity';
import { UserRolesModule } from '@modules/user-roles/user-roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    UserRolesModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: UserSchemaFactory,
        inject: [getModelToken(FlashCard.name), getModelToken(Collection.name)],
        imports: [
          MongooseModule.forFeature([
            { name: FlashCard.name, schema: FlashCardSchema },
            { name: Collection.name, schema: CollectionSchema },
          ]),
        ],
      },
    ]),
  ],
})
export class UsersModule {}
