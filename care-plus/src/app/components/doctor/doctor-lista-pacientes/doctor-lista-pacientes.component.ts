import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../entities/Patient';
import { PacienteService } from '../../../services/paciente.service';
import { Router } from '@angular/router';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-doctor-lista-pacientes',
    standalone: true,
    templateUrl: './doctor-lista-pacientes.component.html',
    styleUrl: './doctor-lista-pacientes.component.css',
    imports: [
        FormsModule,
        CommonModule,
        DoctorSidebarComponent
    ]
})
export class DoctorListaPacientesComponent implements OnInit{

  pacientes:any [] = [];
  pacientes_clear:any[] = [];
  name:string = '';
  dni:string = '';

  constructor(private paciente_service:PacienteService, private router:Router){}

  ngOnInit(): void {
    this.obtener_pacientes();
  }

  obtener_pacientes(){
    this.paciente_service.getPatient().subscribe(dato =>{
      this.pacientes=dato;
      this.pacientes_clear=dato;
    })
  }

  goToClinicalProfile(id:number){
    this.router.navigate(['doctor-clinical-profile',id]);
  }

  burcador_nombre(): void {
    const nombres = this.name.toLowerCase().split(' ');
    this.pacientes = this.pacientes_clear.filter(s => {
      return nombres.every(name => s.name.toLowerCase().includes(name));
    });
    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado pacientes con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  buscador_dni(): void {
    const nombres = this.dni.toLowerCase().split(' ');
    this.pacientes = this.pacientes_clear.filter(s => {
      return nombres.every(dni => s.dni.toLowerCase().includes(dni));
    });
    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado pacientes con el DNI buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  limpiar_filtros(): void {
    this.pacientes = [...this.pacientes_clear];
    this.name = '';
    this.dni='';
  }

}
