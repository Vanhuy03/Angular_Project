import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IAccount } from 'src/interfaces/auth';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.css']
})
export class AuthListComponent {
  account:IAccount[] = []
  constructor(private authService:AuthService){
    this.authService.getAll().subscribe({
    next:(data)=>{
      this.account = data
    },
    error:(err)=>console.log(err.manage)
    })
  }
  removeAccount(id: string) {
    const confirm = window.confirm('Bạn có chắc muón xóa không?');
    if (confirm) {
      this.authService.removeAccount(id).subscribe({
        next: (data) => {
          console.log(data)
          console.log('Xoá sẳn phẩm thành công')
          location.reload();
        }
      })
    }
  }
}
