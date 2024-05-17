import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../entities/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPacienteService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/patient";

  constructor(private httpClient : HttpClient) { }

  crear_paciente(user:Paciente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }

}

