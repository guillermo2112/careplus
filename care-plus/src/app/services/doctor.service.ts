
import { Injectable } from '@angular/core';
import { Doctor } from '../entities/DoctorXX';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

  constructor(private httpClient : HttpClient) { }


  
  listDoctor():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}/api/doctor/all`);
  }


  createDoctor(doctor:Doctor) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/api/doctor`,doctor);

}

  getDoctorId(id: number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/api/doctor/${id}`);
  }

  updateDoctor(id:number, doctor:Doctor) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/api/doctor/${id}`, doctor);
  }

  crear_usuario(user:Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/api/user`,user);
  }

  validarDni(dni: String): Promise<Boolean> {
    return new Promise((resolve, reject) => {
        this.httpClient.get<any>(`${this.baseURL}/api/doctor/dni/${dni}`).subscribe(response => {
            console.log("Variable " + response);
            console.log("Tipo " + typeof response);
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

