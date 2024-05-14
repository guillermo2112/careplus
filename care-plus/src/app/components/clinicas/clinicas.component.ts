import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../hospital.model';
import { HospitalService } from '../../hospital.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clinicas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './clinicas.component.html',
  styleUrl: './clinicas.component.css'
})
export class ClinicasComponent implements OnInit{

  constructor(private hospital_service:HospitalService){}

  hospitales:any[] = [];

  ngOnInit(): void {
    this.obtener_hospitales();   
    
  }

  private obtener_hospitales(){
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      console.log(dato);
      this.hospitales = dato;
    });
  }

}
