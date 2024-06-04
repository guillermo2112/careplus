import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../entities/Patient';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/usuario';
import { Specialty } from '../entities/specialty';
import { Province } from '../entities/Hospital';
import { Doctor } from '../entities/Doctor';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

  constructor(private httpClient:HttpClient) { }

  getPatient():Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}/api/patient/all`);
  }

  getPatientById(id:number):Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.baseURL}/api/patient/${id}`);
  }

  updatePatient(id:number,paciente:Paciente): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/api/patient/${id}`,paciente);
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

  getPatientByUser(id:number):Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.baseURL}/api/patient/user/${id}`);
  }


  //Citas por especialidad
  getSpecialties():Observable<Specialty[]>{
    return this.httpClient.get<Specialty[]>(`${this.baseURL}/api/patient/AppointmentSpecialties`);
  }

  getProvincesBySpecialty(id:number):Observable<Province[]>{
    return this.httpClient.get<Province[]>(`${this.baseURL}/api/patient/AppointmentProvinces/${id}`);
  }

  getHospitalsByProvinceAndSpecialty(idProvince:number, idSpecialty: number):Observable<Province[]>{ 
    return this.httpClient.get<Province[]>(`${this.baseURL}/api/patient/AppointmentHospital/${idProvince}/${idSpecialty}`);
  }

  //Citas por hospital
  getProvinces():Observable<Province[]>{ 
    return this.httpClient.get<Province[]>(`${this.baseURL}/api/patient/AppointmentProvinces`);
  }

  getHospitalByProvince(idProvince:number):Observable<Province[]>{ 
    return this.httpClient.get<Province[]>(`${this.baseURL}/api/patient/AppointmentHospital/${idProvince}`);
  }

  getSpecialtiesByHospital(idHospital:number ):Observable<Specialty[]>{ 
    return this.httpClient.get<Specialty[]>(`${this.baseURL}/api/patient/AppointmentSpecialties/${idHospital}`);
  }

  //Citas por doctor

  getDoctors():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}/api/patient/AppointmentDoctor`);
  }

  getHospitalByDoctor(idDoctor:number):Observable<Province[]>{ 
    return this.httpClient.get<Province[]>(`${this.baseURL}/api/patient/AppointmentDoctorHospital/${idDoctor}`);
  }

}
