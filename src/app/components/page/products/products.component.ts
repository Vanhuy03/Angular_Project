import { Component } from '@angular/core';
import { IProduct } from 'src/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product:IProduct[]= []
  currentProduct!: IProduct;

  constructor(private productService:ProductsService){
    this.productService.getAll().subscribe(
      {
        next:(data)=>{
          this.product = data
        },
        error:(err)=>{
          console.log(err.message)
        }
      }
    )

  }
  getProductById(product: IProduct) {
    this.currentProduct = product;
  }
}
