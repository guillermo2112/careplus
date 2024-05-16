import { Injectable } from '@angular/core';
import { Specialty } from './specialty';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {


  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/specialty";

  constructor(private httpClient : HttpClient) { }

  listSpecialty():Observable<Specialty[]>{
    return this.httpClient.get<Specialty[]>(`${this.baseURL}/all`);
  }

  
  getSpecialtyById(id: number):Observable<Specialty>{
    return this.httpClient.get<Specialty>(`${this.baseURL}/${id}`);
  }

  createSpecialty(specialty:Specialty) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,specialty);

}

  updateSpecialty(id:number, specialty:Specialty) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, specialty);
  }

}
