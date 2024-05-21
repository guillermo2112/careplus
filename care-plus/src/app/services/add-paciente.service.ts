import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../entities/paciente';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class AddPacienteService {
  obstener_usuarios() {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

  constructor(private httpClient : HttpClient) { }

  crear_usuario(user:Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/api/user`,user);
  }

  crear_paciente(paciente:Paciente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/api/patient`,paciente);
  }

}

