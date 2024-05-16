import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './entities/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  login(user: User){
    return this.http.post<any>(`http://localhost:8080/login`,user)
  
    
  }

  logout(){
    localStorage.removeItem('token');
  }

  

}
