import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://qwerty:q1werty@cluster0.q5d9lpt.mongodb.net/?retryWrites=true&w=majority',
    ),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
