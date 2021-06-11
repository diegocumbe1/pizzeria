
import {Document} from 'mongoose';

export interface Producto  extends Document{
   readonly name: string;
   readonly descripcion: string;
   readonly imageURL: string;
   readonly precio: number;
}