import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clinicas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './clinicas.component.html',
  styleUrls: ['./clinicas.component.css']
})
export class ClinicasComponent implements OnInit{
  hospital: any[] = [];
  hospital_clear: any[] = [];
  paginatedHospitals: any[] = [];
  nombre: string = '';
  provincia: string = '';
  seleccionados: string[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  constructor(private hospital_service: HospitalService, private router: Router) {}

  ngOnInit(): void {
    this.obtener_hospital();
  }

  provincias(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedProvince = selectElement.options[selectElement.selectedIndex].text;
    this.buscar_provincia(selectedProvince);
  }

  burcador_nombre() {
    if (this.nombre.trim() === '') {
      this.limpiar_filtros();
    }
    this.buscar_nombre(this.nombre);
  }

  buscador_provincia() {
    if (this.nombre.trim() === '') {
      this.limpiar_filtros();
    }
    this.buscar_provincia(this.nombre);
  }

  ordenar_provincia() { 
    this.hospital.sort((a, b) => a.province.id - b.province.id);
    this.updatePaginatedHospitals();
  }

  ordenar_id() {
    this.hospital.sort((a, b) => a.id - b.id);
    this.updatePaginatedHospitals();
  }

  ordenar_disponibles() {
    this.hospital.sort((a, b) => a.onDutty.localeCompare(b.onDutty));
    this.updatePaginatedHospitals();
  }

  ordenar_nombre() {
    this.hospital.sort((a, b) => a.name.localeCompare(b.name));
    this.updatePaginatedHospitals();
  }

  buscar_disponibles() {
    this.hospital = this.hospital.filter(hospital => hospital.onDutty === 'ACTIVE');
    this.calculateTotalPages();
    this.updatePaginatedHospitals();
  }

  buscar_nombre(nombre: string) {
    const nombres = this.nombre.toLowerCase().split(' ');
    this.hospital = this.hospital.filter(hospital => {
      return nombres.every(nombre => hospital.name.toLowerCase().includes(nombre));
    });
    if (this.hospital.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado clinicas con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    } else {
      this.calculateTotalPages();
      this.updatePaginatedHospitals();
    }
  }

  buscar_provincia(provincia: string) {
    this.limpiar_filtros();
    this.hospital = this.hospital.filter(hospital => hospital.province.name.toLowerCase().startsWith(provincia.toLowerCase()));
    if (this.hospital.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado clinicas con la provincia buscada",
        icon: "error"
      });
      this.limpiar_filtros();
    } else {
      this.calculateTotalPages();
      this.updatePaginatedHospitals();
    }
  }

  limpiar_filtros() {
    this.hospital = this.hospital_clear.slice();
    this.nombre = '';
    this.calculateTotalPages();
    this.updatePaginatedHospitals();
  }

  detalles_hospital(id: number) {
    this.router.navigate(['clinica', id]);
  }

  private obtener_hospital() {
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      this.hospital = dato;
      this.hospital_clear = dato;
      this.calculateTotalPages();
      this.updatePaginatedHospitals();
    });
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

  // Métodos de paginación
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.hospital.length / this.itemsPerPage);
    this.totalPagesArray = Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  updatePaginatedHospitals() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedHospitals = this.hospital.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedHospitals();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedHospitals();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedHospitals();
  }

  trackById(index: number, hospital: any): number {
    return hospital.id;
  }

  getDuttyStatus(status: string): string {
    switch (status) {
      case 'ACTIVE':
        return 'Disponible';
      case 'INACTIVE':
        return 'No disponible';
      case 'SUSPENDED':
        return 'Suspendido';
      default:
        return '';
    }
  }
}
