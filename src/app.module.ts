import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
