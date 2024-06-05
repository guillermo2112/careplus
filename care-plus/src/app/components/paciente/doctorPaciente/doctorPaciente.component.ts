import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Doctor } from '../../../entities/Doctor';
import { DoctorService } from '../../../services/doctor.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";
import Swal from 'sweetalert2';
import { Specialty } from '../../../entities/specialty';

@Component({
    selector: 'app-doctorPaciente',
    standalone: true,
    templateUrl: './doctorPaciente.component.html',
    styleUrls: ['./doctorPaciente.component.css'],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        HeaderComponent,
        NavbarComponent
    ]
})
export class DoctorPacienteComponent implements OnInit {

 
  name:string = '';
  doctores: Doctor[] = [];
  doctores_clear: Doctor[] = [];
  speciality :Specialty [] = [];

  tamañoPag: number = 9;
  paginaActual: number = 1;
  totalPag: number = 1;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listDoctor();
    this.list_speciality();
  }

  trackById(index: number, doctor: Doctor): number {
    return doctor.id;
  }

  detalles_doctor(id:number){
    this.router.navigate(['doctor-vista',id]);
  }

  private list_speciality() {
    this.doctorService.get_specialidades().subscribe(dato => {
      this.speciality = dato;
    });
  }

  private listDoctor() {
    this.doctorService.listDoctor().subscribe(dato => {
      this.doctores = dato;
      this.doctores_clear = dato;
      
    })
    this.totalPag = Math.ceil(this.doctores.length / this.tamañoPag);
    this.paginateDoctores();
  }

  updateDoctor(id: number) {
    this.router.navigate(['update-doctor', id]);
  }

  goToCreate(){
    this.router.navigate(['add-doctor'])
  }

  // createDoctor(id: number) {
  //   this.doctorService.createDoctor(id).subscribe(dato => {
  //     this.doctor = [dato]; 
  //   });
  // }

  seleccionarAccion(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const accion = selectElement.options[selectElement.selectedIndex].value;
    this.limpiar_filtros();
    switch (accion) {
      case 'ordenar_nombre':
        this.ordenar_nombre();
        break;
      case 'ordenar_nombre_des':
        this.ordenar_nombre_des();
        break;
      default:
        break;
    }
  }
  
  seleccionarSpecialty(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const accion = selectElement.options[selectElement.selectedIndex].value;
    this.limpiar_filtros();
    this.buscar_specialty(accion);
  }

  buscar_specialty(espe:string){
    const especialidadID = parseInt(espe, 10); 

    this.doctores = this.doctores_clear.filter(doctor => {
      return doctor.specialty.id === especialidadID;
    });

    if (this.doctores.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado medicos con la especialidad buscada",
        icon: "error"
      });
      this.limpiar_filtros();
    }

  }

  burcador_nombre(): void {
    const nombres = this.name.toLowerCase().split(' ');
    this.doctores = this.doctores_clear.filter(s => {
      return nombres.every(name => s.name.toLowerCase().includes(name));
    });
    if (this.doctores.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado clinicas con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  limpiar_filtros(): void {
    this.doctores = [...this.doctores_clear];
    this.name = '';
    this.paginaActual = 1;
    this.totalPag = Math.ceil(this.doctores.length / this.tamañoPag);
    this.paginateDoctores();
  }

  ordenar_nombre(){
    this.doctores.sort((a, b) => a.name.localeCompare(b.name));
  }
  ordenar_nombre_des(){
    this.doctores.sort((b, a) => a.name.localeCompare(b.name));
  }

  paginateDoctores(): void {
    const startIndex = (this.paginaActual - 1) * this.tamañoPag;
    const endIndex = startIndex + this.tamañoPag;
    this.doctores = this.doctores_clear.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPag) {
      this.paginaActual = page;
      this.paginateDoctores();
    }
  }

  nextPage(): void {
    if (this.paginaActual < this.totalPag) {
      this.paginaActual++;
      this.paginateDoctores();
    }
  }

  previousPage(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.paginateDoctores();
    }
  }

  setPage(page: number | string): void {
    if (page !== '...' && +page > 0 && +page <= this.totalPag) {
      this.paginaActual = +page;
      this.paginateDoctores();
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

}
