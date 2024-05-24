import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../entities/paciente';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/patient";

  constructor(private http:HttpClient) { }

  obtener_pacientes():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(`${this.baseURL}/all`);
  }

  obtener_pacientes_id(id:number):Observable<Paciente>{
    return this.http.get<Paciente>(`${this.baseURL}/${id}`);
  }

  actualizar_paciente(paciente:Paciente,id:number): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,paciente);
  }
  
  crear_usuario(user:Usuario): Observable<Object>{
    return this.http.post(`${this.baseURL}/api/user`,user);
  }

  crear_paciente(paciente:Paciente): Observable<Object>{
    return this.http.post(`${this.baseURL}/api/patient`,paciente);
  }

}
