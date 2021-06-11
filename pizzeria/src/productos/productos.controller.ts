import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';


import { CreateProductosDTO } from './dto/productos.dto';

import { ProductosService } from './productos.service';


@Controller('productos')
export class ProductosController {

    constructor(private productosService:ProductosService) {}


    @Post('/create')
    async createPost(@Res() res, @Body() createProductosDTO: CreateProductosDTO ) {
        
        const producto = await this.productosService.createProducto(createProductosDTO);
        return res.status(HttpStatus.OK).json({
            message : 'Producto creado satisfactoriamente',
            producto
        });
    }


    @Get('/')
    async getProductos(@Res() res) {
        const productos = await this.productosService.getProductos();
        //console.log(productos)
        res.status(HttpStatus.OK).json({
            productos

        })
    }

    @Get('/:productoID')
    async getProducto(@Res() res, @Param('productoID') productoID){
        const producto = await this.productosService.getProducto(productoID);
        if (!producto) throw new NotFoundException(' El producto no existe')
        return res.status(HttpStatus.OK).json(producto);
    }

    @Delete('/delete')
    async deleteProducto(@Res() res, @Query('productoID') productoID){
        const productoEliminado = await this.productosService.deleteProducto(productoID);
        if (!productoEliminado) throw new NotFoundException( 'El producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'Producto Actualizado satisfactoriamente',
            productoEliminado
        })

    }

    @Put('/update')
    async updateProducto(@Res() res, @Body() createProductosDTO:CreateProductosDTO, @Query('productoID')productoID){
        const productoActualizado = await this.productosService.updateProducto(productoID, createProductosDTO);
        if(!productoActualizado) throw new NotFoundException('El producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'Producto Actualizado satisfactoriamente',
            productoActualizado
        })

    }


}
