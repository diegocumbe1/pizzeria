import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.css']
})
export class ListaCarritoComponent implements OnInit {

  
  items = [];

  constructor(private carrito:CarritoService) { }

  ngOnInit(): void {
    this.items =this.carrito.ListarCarrito();
    console.log(this.items)
  }

}
