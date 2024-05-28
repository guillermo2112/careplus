import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs';
import { Usuario } from '../entities/usuario';

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
}
