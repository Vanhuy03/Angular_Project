import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IAccount } from 'src/interfaces/auth';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  accountForm = this.formBuilder.group({
    name:[""],
    email:[""],
    password:[""],
    role:[""]
  })
  account!:IAccount
  mode:"create"|"update" ="create"
  constructor(
    private authService:AuthService,
    private router:ActivatedRoute,
    private formBuilder:FormBuilder
    ){}
    async ngOnInit(){
      const {id} = this.router.snapshot.params
      if(id){
        this.account = await lastValueFrom(this.authService.getAccountById(id))
        this.accountForm.patchValue(this.account as any)
        this.mode ="update"
      }
    }
    async onSubmit(){
      try {
       if(this.mode==="create"){
        await lastValueFrom(this.authService.addAccount(this.accountForm.value as IAccount))
        alert("Add Account Success!");
        window.location.href="/admin/auth"
        
       
       }else{
        await lastValueFrom(this.authService.updateAccount({...this.account,...this.accountForm.value}as IAccount))
        alert("Update Account Success!")
        window.location.href="/admin/auth"
       }
        
      } catch (error) {
        console.log(error)
      }
    }
}
