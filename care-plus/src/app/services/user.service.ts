import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Usuario } from '../entities/usuario';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: Usuario;
  private _token: string;
  private _role: string;

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";
  private baseUrl = 'http://care.francecentral.cloudapp.azure.com:8080';

  constructor(private http: HttpClient) {}

  public get user(): Usuario {
    if (this._user != null) {
      return this._user;
    } else if (this._user == null && sessionStorage.getItem('user') != null) {
      this._user = JSON.parse(sessionStorage.getItem('user')) as Usuario;
      return this._user;
    }
    return new Usuario();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  saveUser(accessToken: string): void {
    let payload = this.getDataToken(accessToken);
    this._user = new Usuario();
    this._user.username = payload.username;
    sessionStorage.setItem('user', JSON.stringify(this._user));
  }
  saveToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }
  saveRole(accessToken: string): void {
    let payload = this.getDataToken(accessToken);
    this._role = payload.authorities;
    sessionStorage.setItem('role', JSON.stringify(this._role));
  }
  getDataToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.getDataToken(this.token);

    if (payload != null && payload.username && payload.username.length > 0) {
      return true;
    }
    return false;
  }

  login(user: Usuario): Observable<any> {
    const url: string = `${this.baseUrl}/login`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, user, { headers: httpHeaders });
  }

  logout(): void {
    this._token = null;
    this._user = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  getUserByUsername(username:string):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseURL}/api/user/username/${username}`);
  }

  getUser(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseURL}/api/user/${id}`);
  }


















  //private http = inject(HttpClient);

  /*login(user: Usuario){
    return this.http.post<any>(`http://care.francecentral.cloudapp.azure.com:8080/login`,user)
  }*/

  logout2(){
    localStorage.removeItem('token');
    //sessionStorage.clear();
  }

  //Comprueba si ya hay un token en el sessionStorage
  isAuthenticated2(): boolean {
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
