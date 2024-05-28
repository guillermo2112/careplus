import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shift } from '../entities/shift';

@Injectable({
  providedIn: 'root',
})
export class ShiftService {
  private baseURL =
    'http://care.francecentral.cloudapp.azure.com:8080/api/shift';

  constructor(private http: HttpClient) {}

  obtener_shift_id(id: number): Observable<Shift> {
    return this.http.get<Shift>(`${this.baseURL}/${id}`);
  }

  listar_shift(): Observable<Shift[]> {
    return this.http.get<Shift[]>(`${this.baseURL}/all`);
  }
}
