import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../hospital.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private hospital_service:HospitalService, private router:Router){}

  hospitales:any[] = [];
  hospitales_clear:any[] = [];
  nombre:string = '';

  ngOnInit(): void {
    this.obtener_hospitales();
        
  }

  onSubmit(){
    if(this.nombre.trim() === ''){
      this.ordenar_id();
    }
    this.buscar_nombre(this.nombre);
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

  buscar_nombre(nombre:string){
    this.hospitales = this.hospitales.filter(hospital => hospital.name.toLowerCase().startsWith(nombre.toLowerCase()));
    if (this.hospitales.length === 0) {
      console.log('Sin resultados');
    }
  }

  limpiar_filtros(){
    this.hospitales = this.hospitales_clear.slice();
    this.nombre='';
  }

  detalles_hospital(id:number){
    this.router.navigate(['clinica',id]);
  }

  private obtener_hospitales(){
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      this.hospitales = dato;
      this.hospitales_clear = dato;
      
    });
  }
}
