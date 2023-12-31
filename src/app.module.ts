import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { database_config } from '@configs/configuration.config';
import Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@modules/users/users.module';
import { UserRolesModule } from '@modules/user-roles/user-roles.module';
import { TopicsModule } from '@modules/topics/topics.module';
import { FlashCardsModule } from '@modules/flash-cards/flash-cards.module';
import { CollectionModule } from '@modules/collection/collection.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        PORT: Joi.number().port().required(),
        DATABASE_PORT: Joi.number().port().required(),
        DATABASE_USERNAME: Joi.string().min(4).required(),
        DATABASE_PASSWORD: Joi.string().min(4).required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_URI: Joi.string().required(),
      }),
      validationOptions: {
        abortEarly: false,
      },
      load: [database_config],
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get<string>('DATABASE_URI'),
          dbName: configService.get<string>('DATABASE_NAME'),
        };
      },
      inject: [ConfigService],
    }),
    UsersModule,
    UserRolesModule,
    TopicsModule,
    FlashCardsModule,
    CollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
