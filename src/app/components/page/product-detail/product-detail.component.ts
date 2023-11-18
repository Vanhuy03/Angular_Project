import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/interfaces/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    // inject service xử lý router
    private router: ActivatedRoute,
    // inject service product
    private productService: ProductsService
  ) {
    this.router.params.subscribe(({ id }) => {
      this.productService.getProductById(id).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.log(err.message)
      })
    });
  
}
}
