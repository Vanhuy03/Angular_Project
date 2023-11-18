import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAccount } from 'src/interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   API_URL = 'http://localhost:3000/auth'
  constructor(private http:HttpClient) { }
  getAll():Observable<IAccount[]>{
    return this.http.get<IAccount[]>(this.API_URL)
  }
  getAccountById(id:number|string):Observable<IAccount>{
    return this.http.get<IAccount>(`${this.API_URL}/${id}`)
  }
  addAccount(account:IAccount):Observable<IAccount[]>{
    return this.http.post<IAccount[]>(`${this.API_URL}`,account)
  }
  updateAccount(account:IAccount):Observable<IAccount>{
    return this.http.patch<IAccount>(`${this.API_URL}/${account.id}`,account)
  }
  removeAccount(id: string): Observable<{ message: string, data: IAccount }> {
    return this.http.delete<{ message: string, data: IAccount }>(`${this.API_URL}/${id}`)
  }

}
