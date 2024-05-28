import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { Provincias } from '../../../entities/Provincias';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-clinicas-admin',
    standalone: true,
    templateUrl: './clinicas-admin.component.html',
    styleUrl: './clinicas-admin.component.css',
    imports: [
        CommonModule,
        FormsModule,
        AdminSidebarComponent,
        AdminSidebarComponent,
        HeaderComponent
    ]
})
export class ClinicasAdminComponent implements OnInit{
  

  constructor(
    private hospital_service:HospitalService,
    private router:Router
  ){}

  hospital:any[] = [];
  province:any[] = [];
  hospital_clear:any[] = [];
  nombre:string = '';
  provincias: Provincias []= [];
  seleccionados:string[]=[];
  currentPage: number = 0;
  itemsPerPage: number = 9;

  ngOnInit(): void {
    this.obtener_hospital();
    this.list_provincias();
        
  }

  list_provincias(){
    this.hospital_service.obtener_provincias().subscribe(dato => {
      this.provincias = dato;
    });
  }
  
  chunkArray(myArray: any[], chunk_size: number): any[] {
    const results = [];
    for (let i = 0; i < myArray.length; i += chunk_size) {
      results.push(myArray.slice(i, i + chunk_size));
    }
    return results;
  }

  nextPage() {
    if (this.currentPage < this.chunkArray([...this.hospital], this.itemsPerPage).length - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  get totalPages(): number {
    return this.chunkArray([...this.hospital], this.itemsPerPage).length;
  }

  provinciasAll(event: Event): void {
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
  

/*
updateHospital(id: number): void {
  this.router.navigate(['update-hospital', id]);
}*/

updateHospital(id: number) {
  const navigationExtras: NavigationExtras = {
    state: {
      hospitalId: id,
    },
  };
  this.router.navigate(['update-hospital'], navigationExtras);
}



getHospitalById(id: number): void {
  this.hospital_service.obtener_hospital_id(id).subscribe(data => {
    this.hospital = [data];
  });
}


goToCreate() {
  window.location.href = '/add-hospital';
}

suspenderHospital() {
  // const onDutty = '';  // Nombre del campo a actualizar
  // const newValue = 'nuevoValor';  // Nuevo valor del campo

  // this.dataService.updateField(id, fieldName, newValue).subscribe(
  //   response => {
  //     console.log('Campo actualizado con éxito', response);
  //   },
  //   error => {
  //     console.error('Error al actualizar el campo', error);
  //   }
}
}
