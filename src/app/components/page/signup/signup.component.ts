import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IAccount } from 'src/interfaces/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formSignup = this.formBuilder.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.required]],
    role:"user"
  }, { validators: this.checkPassword })
  constructor(
    private formBuilder: FormBuilder,
    private accountService:AuthService
    ) {

  }
  account!:IAccount

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }
  onSubmit(){
    if (this.formSignup.valid) {
      this.accountService.addAccount(this.formSignup.value as IAccount).subscribe(
        res=>{
          alert("Signup Success!")
          this.formSignup.reset()
          window.location.href="login"
        },err=>{
          alert("Something went wrong!")
        }
      );
      
     
    }
  }
}