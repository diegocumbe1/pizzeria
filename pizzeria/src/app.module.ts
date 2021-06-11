import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';


@Module({
  imports: [
    ProductosModule, 
    MongooseModule.forRoot('mongodb+srv://diegocumbe:1234@cluster0.ggnuq.mongodb.net/pizzeria-tifi?retryWrites=true&w=majority',{
      useNewUrlParser: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
