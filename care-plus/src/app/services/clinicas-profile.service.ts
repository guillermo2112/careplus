import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClinicaProfile } from '../entities/ClinicaProfile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicasProfileService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

  constructor(private httpClient : HttpClient) { }

  listClinicasProfile():Observable<ClinicaProfile[]>{
    return this.httpClient.get<ClinicaProfile[]>(`${this.baseURL}/api/clinicalprofile/all`);
  }

  getClinicasProfileId(id: number):Observable<ClinicaProfile>{
    return this.httpClient.get<ClinicaProfile>(`${this.baseURL}/api/clinicalprofile${id}`);
  }
}
