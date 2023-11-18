import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin = this.formBuilder.group({
    email:[""],
    password:[""],
    role:[""]
  })
  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private authService:AuthService
    ){}
    login(){
      this.http.get<any>("http://localhost:3000/auth").subscribe(res=>{
        const user = res.find((checkUser:any)=>{
          return checkUser.email === this.formLogin.value.email && checkUser.password === this.formLogin.value.password && checkUser.role =="user" 
        })
        const Admin = res.find((checkAdmin:any)=>{
          return checkAdmin.email === this.formLogin.value.email && checkAdmin.password === this.formLogin.value.password && checkAdmin.role =="admin"
        }) 
        if(user){
          alert("Login Succes!")
          this.formLogin.reset()
          window.location.href="product"
        }else if(Admin){
          alert("Login Success!")
          this.formLogin.reset()
          window.location.href="admin"
        }else{
          alert("User Not Found!")
        }
      })
    }
}
