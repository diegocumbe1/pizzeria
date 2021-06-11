import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

import {Producto} from './interfaces/productos.interface';
import { CreateProductosDTO } from './dto/productos.dto';


@Injectable()
export class ProductosService {

    constructor(@InjectModel('Producto') private readonly productoModel: Model<Producto>){}

        //obtener productos desde el cliente
       async  getProductos(): Promise<Producto[]> {
            const productos= await this.productoModel.find();
            return productos;

        }
     //obtener solo un producto
       async getProducto(productoId: string): Promise<Producto>{
            const producto = await this.productoModel.findById(productoId);
            return producto;

        }
  //crear producto
        async createProducto(createProductosDTO:CreateProductosDTO): Promise<Producto>{
          const producto = new this.productoModel(createProductosDTO);
          return  await producto.save();      
         
        }
    //eliminar producto
        async deleteProducto(productoID: string): Promise<Producto>{
          const deletedProducto = await this.productoModel.findByIdAndDelete(productoID);
          return deletedProducto;

        }

    //editar producto
        
        async updateProducto(productoID: string,createProductosDTO: CreateProductosDTO): Promise<Producto>{
           const updateProducto = await this.productoModel.findByIdAndUpdate(productoID,
            createProductosDTO,
            {new: true});
           return updateProducto;

        }

    }

