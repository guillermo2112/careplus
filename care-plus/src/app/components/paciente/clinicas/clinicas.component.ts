import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clinicaspaciente',
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

  hospital:any[] = [];
  hospital_clear:any[] = [];
  nombre:string = '';
  provincia:string='';
  seleccionados:string[]=[];

  ngOnInit(): void {
    this.obtener_hospital();
        
  }

  provincias(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedProvince = selectElement.options[selectElement.selectedIndex].text;
    this.buscar_provincia(selectedProvince);
  }

  burcador_nombre(){
    if(this.nombre.trim() === ''){
      this.limpiar_filtros();
    }
    this.buscar_nombre(this.nombre);
  }

  buscador_provincia(){
    if(this.nombre.trim() === ''){
      this.limpiar_filtros();
    }
    this.buscar_provincia(this.nombre);
  }

  ordenar_provincia(){ 
    this.hospital.sort((a, b) => a.province.id - b.province.id);
  }

  ordenar_id(){
    this.hospital.sort((a, b) => a.id - b.id);
  }

  ordenar_disponibles(){
    this.hospital.sort((a, b) => a.onDutty.localeCompare(b.onDutty));
  }

  ordenar_nombre(){
    this.hospital.sort((a, b) => a.name.localeCompare(b.name));
  }

  buscar_disponibles(){
    this.hospital = this.hospital.filter(hospital => hospital.onDutty === 'ACTIVE');
  }

  buscar_nombre(nombre:string){
    //this.hospital = this.hospital.filter(hospital => hospital.name.toLowerCase().startsWith(nombre.toLowerCase()));
    const nombres = this.nombre.toLowerCase().split(' ');
    this.hospital = this.hospital.filter(hospital => {
      return nombres.every(nombre => hospital.name.toLowerCase().includes(nombre))});
    if (this.hospital.length === 0) {
      Swal.fire({
        title: "Opps...",
        text:"No se han encontrado clinicas con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  buscar_provincia(provincia:string){
    this.limpiar_filtros();
    this.hospital = this.hospital.filter(hospital => hospital.province.name.toLowerCase().startsWith(provincia.toLowerCase()));
    if (this.hospital.length === 0) {
      Swal.fire({
        title: "Opps...",
        text:"No se han encontrado clinicas con la provincia buscada",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  limpiar_filtros(){
    this.hospital = this.hospital_clear.slice();
    this.nombre='';
  }

  detalles_hospital(id:number){
    this.router.navigate(['clinica',id]);
  }

  private obtener_hospital(){
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      this.hospital = dato;
      this.hospital_clear = dato;
      
    });
  }

  seleccionarAccion(event: Event):void {
    const selectElement = event.target as HTMLSelectElement;
    const accion = selectElement.options[selectElement.selectedIndex].value;
    this.limpiar_filtros();
    switch (accion) {
      case 'ordenar_provincia':
        this.ordenar_provincia();
        break;
      case 'ordenar_id':
        this.ordenar_id();
        break;
      case 'ordenar_nombre':
        this.ordenar_nombre();
        break;
      case 'ordenar_disponibles':
        this.ordenar_disponibles();
        break;
      case 'buscar_disponibles':
        this.buscar_disponibles();
        break;
      default:

        break;
    }
  }
  value:any;
  


updateHospital(id: number): void {
  this.router.navigate(['update-hospital', id]);
}



getHospitalById(id: number): void {
  this.hospital_service.obtener_hospital_id(id).subscribe(data => {
    this.hospital = [data];
  });
}


goToCreate() {
  window.location.href = '/add-hospital';
}
}