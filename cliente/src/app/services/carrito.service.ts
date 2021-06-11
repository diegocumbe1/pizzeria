import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  producto :Producto[] =[];
  items =[];
  
  constructor() { }

  adicionarCarrito(producto){
    this.items.push(producto);
  }

  LimpiarCarrito(){
    this.items=[];
    return this.items;
  }

  ListarCarrito(){
    return this.items;
  }

}
