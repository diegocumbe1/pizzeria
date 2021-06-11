import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Producto} from '../interfaces/Producto';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  BASE_URL: String ='http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/productos`);
    
  }

  getProducto(id: string):Observable<Producto>{
    return this.http.get<Producto>(`${this.BASE_URL}/productos/${id}`);


  }
  createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.BASE_URL}/productos/create`, producto);
  }

  deleteProducto(id: string): Observable<Producto>{
    return this.http.delete<Producto>(`${this.BASE_URL}/productos/delete?productoID=${id}`);
  }


  updateProducto(id: string, producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.BASE_URL}/productos/update?productoID=${id}`, producto);

  }

  



}
function producto<T>(arg0: string, producto: any, arg2: string): Observable<Producto[]> {
  throw new Error('Function not implemented.');
}

