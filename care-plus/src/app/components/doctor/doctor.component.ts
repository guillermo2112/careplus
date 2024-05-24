import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../entities/Doctor';
import Swal from 'sweetalert2';
import { Specialty } from '../../entities/specialty';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  name:string = '';
  doctores: Doctor[] = [];
  doctores_clear: Doctor[] = [];
  speciality :Specialty [] = [];

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
    });
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
        console.log('a');
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
    console.log(accion);
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
  }

  ordenar_nombre(){
    this.doctores.sort((a, b) => a.name.localeCompare(b.name));
  }
  ordenar_nombre_des(){
    this.doctores.sort((b, a) => a.name.localeCompare(b.name));
  }

}
