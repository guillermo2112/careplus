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
  hospitales_clear:any[] = [];

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
    this.hospitales.sort((a, b) => a.onDutty.localeCompare(b.onDutty));
  }

  ordenar_nombre(){
    this.hospitales.sort((a, b) => a.name.localeCompare(b.name));
  }

  buscar_disponibles(){
    this.hospitales = this.hospitales.filter(hospital => hospital.onDutty === 'ACTIVE');
  }

  limpiar_filtros(){
    this.hospitales = this.hospitales_clear.slice();
  }

  private obtener_hospitales(){
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      this.hospitales = dato;
      this.hospitales_clear = dato
    });
  }
}
