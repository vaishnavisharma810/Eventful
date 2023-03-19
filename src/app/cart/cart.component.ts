import { Component } from '@angular/core';
import { Products } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  prod!: Products;
  id!: number;
  index = 0;
  bDisplaySelectForm: boolean = false;

  constructor(private productsService: ProductsService) { }

  productsData: Products[] = [];

  readProductData() {
    this.productsData = this.productsService.getAllProducts();
  }

  selectProduct(id: number) {
    for (let pack of this.productsData) {
      if (pack.packID == id)
        this.prod = pack;
    }
    this.index = this.productsData.indexOf(this.prod);
    this.bDisplaySelectForm = true;
  }

  onSave() {
    this.bDisplaySelectForm = false;
    alert("Your pack has been selected! you are now "+this.productsData[this.index].packName+ " member")
  }
}

