import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../entities/usuario';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

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

  getUserByUsername(username:string):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseURL}/api/user/username/${username}`);
  }

  getUser(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseURL}/api/user/${id}`);
  }


}
