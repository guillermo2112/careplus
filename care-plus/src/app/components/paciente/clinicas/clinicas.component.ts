import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Provincias } from '../../../entities/Provincias';
import { HeaderComponent } from "../../shared/header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-clinicaspaciente',
    standalone: true,
    templateUrl: './clinicas.component.html',
    styleUrls: ['./clinicas.component.css'],
    imports: [
        CommonModule,
        FormsModule,
        HeaderComponent,
        NavbarComponent
    ]
})
export class ClinicasComponent implements OnInit{
  hospital: any[] = [];
  hospital_clear: any[] = [];
  nombre: string = '';
  provincias: Provincias[] = [];
  seleccionados: string[] = [];

  // Variables para paginación
  tamañoPag: number = 9;
  paginaActual: number = 1;
  totalPag: number = 1;

  constructor(private hospital_service: HospitalService, private router: Router) {}

  ngOnInit(): void {
    this.obtener_hospital();
    this.list_provincias();
  }

  list_provincias(){
    this.hospital_service.obtener_provincias().subscribe(dato => {
      this.provincias = dato;
    });
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
    this.updatePaginatedData();
  }

  ordenar_id(){
    this.hospital.sort((a, b) => a.id - b.id);
    this.updatePaginatedData();
  }

  ordenar_disponibles(){
    this.hospital.sort((a, b) => a.onDutty.localeCompare(b.onDutty));
    this.updatePaginatedData();
  }

  ordenar_nombre(){
    this.hospital.sort((a, b) => a.name.localeCompare(b.name));
    this.updatePaginatedData();
  }

  buscar_disponibles(){
    this.hospital = this.hospital.filter(hospital => hospital.onDutty === 'ACTIVE');
    this.updatePaginatedData();
  }

  buscar_nombre(nombre: string){
    const nombres = this.nombre.toLowerCase().split(' ');
    this.hospital = this.hospital.filter(hospital => {
      return nombres.every(nombre => hospital.name.toLowerCase().includes(nombre))
    });
    if (this.hospital.length === 0) {
      Swal.fire({
        title: "Opps...",
        text:"No se han encontrado clinicas con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
    this.updatePaginatedData();
  }

  buscar_provincia(provincia: string){
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
    this.updatePaginatedData();
  }

  limpiar_filtros(){
    this.hospital = this.hospital_clear.slice();
    this.nombre = '';
    this.paginaActual = 1;
    this.totalPag = Math.ceil(this.hospital.length / this.tamañoPag);
    this.updatePaginatedData();
  }

  detalles_hospital(id: number){
    this.router.navigate(['clinica', id]);
  }

  private obtener_hospital(){
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      this.hospital = dato;
      this.hospital_clear = dato;
      
    });
    this.totalPag = Math.ceil(this.hospital.length / this.tamañoPag);
    this.updatePaginatedData();
  }

  seleccionarAccion(event: Event): void {
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
    this.updatePaginatedData();
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPag) {
      this.paginaActual = page;
      this.updatePaginatedData();
    }
  }

  nextPage(): void {
    if (this.paginaActual < this.totalPag) {
      this.paginaActual++;
      this.updatePaginatedData();
    }
  }

  previousPage(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.updatePaginatedData();
    }
  }

  setPage(page: number | string): void {
    if (page !== '...' && +page > 0 && +page <= this.totalPag) {
      this.paginaActual = +page;
      this.updatePaginatedData();
    }
  }

  getPages(): (number | string)[] {
    const totalVisiblePages = 5;
    const pages: (number | string)[] = [];
    if (this.totalPag <= totalVisiblePages + 1) {
      for (let i = 1; i <= this.totalPag; i++) {
        pages.push(i);
      }
    } else {
      if (this.paginaActual <= 3) {
        for (let i = 1; i <= totalVisiblePages; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPag);
      } else if (this.paginaActual >= this.totalPag - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = this.totalPag - totalVisiblePages + 1; i <= this.totalPag; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = this.paginaActual - 1; i <= this.paginaActual + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPag);
      }
    }
    return pages;
  }

  private updatePaginatedData(): void {
    const startIndex = (this.paginaActual - 1) * this.tamañoPag;
    const endIndex = startIndex + this.tamañoPag;
    this.hospital = this.hospital_clear.slice(startIndex, endIndex);

  }

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

  trackById(index: number, item: any): any {
    return item.id;
  }
}
