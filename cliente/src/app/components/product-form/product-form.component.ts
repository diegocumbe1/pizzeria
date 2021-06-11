import { Component, OnInit } from '@angular/core';
import {Producto} from '../../interfaces/Producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  producto: Producto = {
    name: '',
    descripcion:'',
    imageURL: '',
    precio: 0
    
  };
  constructor(
    private productoService:ProductoService,
    private router: Router 
    ) { }

  ngOnInit(): void {
  }

  submitProducto(){
    this.productoService.createProducto(this.producto)
    .subscribe(
      res => {console.log(res);
      this.router.navigate(['/']);
    },
      err => console.log(err)
    )
  }

  updateProducto(){
    console.log(this.producto)
  }


}
