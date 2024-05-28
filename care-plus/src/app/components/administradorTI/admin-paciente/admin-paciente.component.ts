import { Component, OnInit } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { Paciente } from '../../../entities/Patient';
import { PacienteService } from '../../../services/paciente.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    itemsPerPage: number = 9;
    currentPage: number = 0;
    totalPages: number = 0;
 

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

}
