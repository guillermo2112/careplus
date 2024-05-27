import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../entities/Patient';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/patient";

  constructor(private httpClient:HttpClient) { }

  getPatient():Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}/all`);
  }

  getPatientById(id:number):Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.baseURL}/${id}`);
  }

  updatePatient(id:number,paciente:Paciente): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,paciente);
  }
  
  createUser(user:Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/api/user`,user);
  }

  createPatient(paciente:Paciente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/api/patient`,paciente);
  }
  validarDni(dni: string): Promise<Boolean> {
    return new Promise((resolve, reject) => {
        this.httpClient.get<any>(`${this.baseURL}/api/patient/dni/${dni}`).subscribe(response => {
          console.log(response);
            if (response === true) {
                resolve(true);
            } else {
                resolve(false);
            } 
        }, error => {
            reject(error);
        });
    });
  }


}
