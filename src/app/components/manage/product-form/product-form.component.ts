import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {FormBuilder, Validators} from '@angular/forms'
import { IProduct } from 'src/interfaces/products';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm = this.formBulder.group({
    name:["",[Validators.required,Validators.minLength(6)]],
    price:[0,[Validators.required,Validators.min(0)]],
    image:[""],
    desc:["",[Validators.required,Validators.minLength(6)]]
  })
  product!:IProduct
  mode:"create"|"update" ="create"
  constructor(
    private router:ActivatedRoute,
    private formBulder:FormBuilder,
    private productService:ProductsService  ){
  }
  async ngOnInit(){
    const {id} = this.router.snapshot.params
    if(id){
      this.product = await lastValueFrom(this.productService.getProductById(id))
      this.productForm.patchValue(this.product as any)
      this.mode ="update"
    }
  }
  async onSubmit(){
    try {
     if(this.mode==="create"){
      await lastValueFrom(this.productService.addProduct(this.productForm.value as IProduct))
      alert("Bạn đã thêm sản phẩm thành công!")
      
     
     }else{
      await lastValueFrom(this.productService.updateProduct({...this.product,...this.productForm.value}as IProduct))
      alert("Bạn đã cập nhật sản phẩm thành công!")
      window.location.href="/admin/product"
     }
      
    } catch (error) {
      console.log(error)
    }
  }

}
