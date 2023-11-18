import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/interfaces/products';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent {
  product:IProduct[]= []
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
  // async removeProduct(id:string ){
  //   const confirm = window.confirm("Bạn có muốn xóa không?")
  //   if(!confirm) return;
  //   try {
  //     this.product = await lastValueFrom(this.productService.removeProduct(id))
  //     alert("Bạn đã xóa thành công!")
    
  //   } catch (error) {
      
  //   }
  // }
  removeProduct(id: string) {
    const confirm = window.confirm('Bạn có chắc muón xóa không?');
    if (confirm) {
      this.productService.removeProduct(id).subscribe({
        next: (data) => {
          console.log(data)
          console.log('Xoá sẳn phẩm thành công')
          location.reload();
        }
      })
    }
  }
}
