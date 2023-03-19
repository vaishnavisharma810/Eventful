import { Injectable } from '@angular/core';
import { Products } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr : Products[] = [
    {packID : "PRM111", packName : "PREMIUM", packDescription : "Catering, Music, Entertainment, Flower + Balloon Decorations included", packCost : 55000},
    {packID : "GLD222", packName : "GOLD", packDescription : "Catering, Music and Balloon/Flower Decorations included", packCost : 40000},
    {packID : "SLV333", packName : "SILVER", packDescription : "Catering + Balloon/Flower Decorations included", packCost : 30000},
    {packID : "BRZ444", packName : "BRONZE", packDescription : "Music + Balloon/Flower Decorations included", packCost : 12000},
    {packID : "REG444", packName : "REGULAR", packDescription : "Only Balloon Decorations included", packCost : 8000}
  ];

  constructor() { }

  getAllProducts(){
    return this.productsArr;
  }

  selectProducts(){
    
  }
}
