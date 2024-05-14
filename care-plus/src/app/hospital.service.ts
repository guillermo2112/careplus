import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from './hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private http_client:HttpClient) { }

  obtener_hospitales():Observable<Hospital[]>{
    return this.http_client.get<Hospital[]>(`${this.baseURL}`);

  }

}
