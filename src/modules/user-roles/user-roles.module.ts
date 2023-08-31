import { Module } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRole, UserRoleSchema } from './entities/user-role.entity';

@Module({
  controllers: [UserRolesController],
  providers: [UserRolesService],
  imports: [
    MongooseModule.forFeature([
      { name: UserRole.name, schema: UserRoleSchema },
    ]),
  ],
})
export class UserRolesModule {}
