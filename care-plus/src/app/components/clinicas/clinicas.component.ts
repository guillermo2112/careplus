import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  ordenar_provincia(){ 
    this.hospitales.sort((a, b) => a.province.id - b.province.id);
  }

  ordenar_id(){
    this.hospitales.sort((a, b) => a.id - b.id);
  }

  ordenar_disponibles(){
    this.hospitales.sort((a, b) => a.onDutty - b.onDutty);
  }

  ordenar_nombre(){
    this.hospitales.sort((a, b) => a.nombre - b.nombre);
  }

  private obtener_hospitales(){
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      this.hospitales = dato
    });
  }
}
