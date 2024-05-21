import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../entities/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/patient";

  constructor(private http:HttpClient) { }

  obtener_pacientes():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(`${this.baseURL}/all`);
  }

  obtener_pacientes_id(id:number):Observable<Paciente[]>{
    return this.http.get<Paciente[]>(`${this.baseURL}/${id}`);
  }

}
