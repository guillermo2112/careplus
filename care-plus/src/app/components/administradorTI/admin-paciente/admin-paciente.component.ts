import { Component, OnInit } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { Paciente } from '../../../entities/Patient';
import { PacienteService } from '../../../services/paciente.service';
import { ActivatedRoute, NavigationExtras, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HeaderComponent } from "../../shared/header/header.component";

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
        HeaderComponent
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
      this.totalPages = (Math.ceil(this.pacientes.length / this.itemsPerPage-1));
    });
  }

  updatePaciente(id: number) {
    this.router.navigate(['paciente', id]);
  }

  goToCreate(){
    this.router.navigate(['add_paciente'])
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  setPage(page: number | string): void {
    if (page !== '...' && +page > -1 && +page <= this.totalPages) {
      this.currentPage = +page;
    }
  }

  getPages(): (number | string)[] {
    const totalVisiblePages = 5;
    const pages: (number | string)[] = [];
    if (this.totalPages <= totalVisiblePages + 1) {
      for (let i = 0; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 0; i <= totalVisiblePages; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(0);
        pages.push('...');
        for (let i = this.totalPages - totalVisiblePages + 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(0);
        pages.push('...');
        for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages);
      }
    }
    return pages;
  }

  get paginatedHospitals(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.pacientes.slice(start, end);
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

  navigateToUpdatePatient(id:number) {
    const navigationExtras: NavigationExtras = {
      state: {
        pacienteid: id
      }
    };
    this.router.navigate(['/update-paciente'], navigationExtras);
  }

}
