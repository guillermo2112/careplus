import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs';
import { Usuario } from '../entities/usuario';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  login(user: Usuario){
    return this.http.post<any>(`http://care.francecentral.cloudapp.azure.com:8080/login`,user)
  }

  logout(){
    localStorage.removeItem('token');
  }

  //Comprueba si ya hay un token en el sessionStorage
  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return false;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp > currentTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }



}
