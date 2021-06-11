import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

import { Producto } from '../../interfaces/Producto';
import {CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  //productos: Producto[];
  productos: any = []; 
  
  constructor(private productoService: ProductoService, private carrito:CarritoService) { }


    ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(
        res =>{
          this.productos = res.productos,
        console.log(res)
        },
         
        err => console.log(err)
      )
  }
 

  deleteProducto(id: string): void {
    this.productoService.deleteProducto(id)
      .subscribe(
        res => {
          console.log(res);
          this.getProductos();
        },
        err => console.log(err)
      )
  }

  adicionarCarrito(producto){
    this.carrito.adicionarCarrito(producto);
    window.alert(" agregado al carrito con exito");
  }

  
}
