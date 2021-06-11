import {Schema} from 'mongoose'

 export const ProductosSchema = new Schema({
    name :{type: String, required: true },
    descripcion: String,
    imageURL: String,
    precio: Number
});