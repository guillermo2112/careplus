import { Component, OnInit } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { Paciente } from '../../../entities/Patient';
import { PacienteService } from '../../../services/paciente.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-admin-paciente',
    standalone: true,
    templateUrl: './admin-paciente.component.html',
    styleUrl: './admin-paciente.component.css',
    imports: [
        AdminSidebarComponent,
        RouterModule,
        CommonModule,
        FormsModule,
    ]
})
export class AdminPacienteComponent implements OnInit {

    pacientes: Paciente[] = [];
    pacientes_clear: Paciente[] = [];
    itemsPerPage: number = 9;
    currentPage: number = 0;
    totalPages: number = 0;
    id:string = '';
    name:string = '';
    dni:string = '';
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService,
  ) {}

  ngOnInit(): void {
    this.listPaciente();
  }

  private listPaciente() {
    this.pacienteService.getPatient().subscribe(dato => {
      this.pacientes = dato;
      this.pacientes_clear = dato;
      this.totalPages = Math.ceil(this.pacientes.length / this.itemsPerPage);
    });
  }

  updatePaciente(id: number) {
    this.router.navigate(['paciente', id]);
  }

  goToCreate(){
    this.router.navigate(['add_paciente'])
  }

  prevPage(event: Event) {
    event.preventDefault();
    if (this.currentPage > 0) {
      this.setPage(event, this.currentPage - 1);
    }
  }

  nextPage(event: Event) {
    event.preventDefault();
    if (this.currentPage < this.totalPages - 1) {
      this.setPage(event, this.currentPage + 1);
    }
  }

  setPage(event: Event, pageIndex: number) {
    event.preventDefault();
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.currentPage = pageIndex;
    }
  }

  chunkArray(myArray: any[], chunk_size: number) {
    const results = [];
    for (let i = 0; i < myArray.length; i += chunk_size) {
      results.push(myArray.slice(i, i + chunk_size));
    }
    return results;
  }

  limpiar_filtros(): void {
    this.pacientes = [...this.pacientes_clear];
    this.name = '';
    this.id='';
    this.dni = '';
  }

  burcador_id(): void {
    const id = Number(this.id);

    if (isNaN(id)) {
      Swal.fire({
        title: "Error",
        text: "El ID ingresado no es válido",
        icon: "error"
      });
      return;
    }

    this.pacientes = this.pacientes_clear.filter(Paciente => Paciente.id === id);

    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Mantenimiento",
        text: "No se han encontrado doctores con el id buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  burcador_nombre(): void {
    const nombres = this.name.toLowerCase().split(' ');
    this.pacientes = this.pacientes_clear.filter(s => {
      return nombres.every(name => s.name.toLowerCase().includes(name));
    });
    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado doctores con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  burcador_dni(): void {
    const nombres = this.dni.toLowerCase().split(' ');
    this.pacientes = this.pacientes_clear.filter(s => {
      return nombres.every(dni => s.dni.toLowerCase().includes(dni));
    });
    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado doctores con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

}
