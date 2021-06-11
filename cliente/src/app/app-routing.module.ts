import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import { ListaCarritoComponent } from './components/lista-carrito/lista-carrito.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },{
    path: 'productos',
    component: ProductListComponent
  },
  {
    path: 'productos/create',
    component: ProductFormComponent
  },{
    path: 'productos/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'productos/carrito',
    component: ListaCarritoComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
