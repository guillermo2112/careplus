
import { Injectable } from '@angular/core';
import { Doctor } from '../entities/Doctor';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/usuario';
import { HttpClient } from '@angular/common/http';
import { Specialty } from '../entities/specialty';

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

  get_specialidades():Observable<Specialty[]>{
    return this.httpClient.get<Specialty[]>(`${this.baseURL}/api/specialty/all`);
  }

  getUsuario(id:number):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/api/user/${id}`);
  }

  getDoctorByUser(id:number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/api/doctor/user/${id}`);
  }

  
}

