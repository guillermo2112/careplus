import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './entities/user';
import { tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  login(user: User){
    return this.http.post<any>(`http://care.francecentral.cloudapp.azure.com:8080/login`,user)
  
    
  }

  getAuthorities(){
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.authorities;
      
    }
    return null;
  }


  logout(){
    localStorage.removeItem('token');
  }

  

}
