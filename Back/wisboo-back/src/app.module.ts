import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [ImagesModule, MongooseModule.forRoot(
    "mongodb://user:user@cluster0-shard-00-00.zrbdj.mongodb.net:27017,cluster0-shard-00-01.zrbdj.mongodb.net:27017,cluster0-shard-00-02.zrbdj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-4n2l6k-shard-0&authSource=admin&retryWrites=true&w=majority",
    {useNewUrlParser:true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
