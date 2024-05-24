import { Component, OnInit } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { Paciente } from '../../../entities/paciente';
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
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService,
  ) {}

  ngOnInit(): void {
    this.listPaciente();
  }

  private listPaciente() {
    this.pacienteService.obtener_pacientes().subscribe(dato => {
      this.pacientes = dato;
 
    });
  }

  updatePaciente(id: number) {
    this.router.navigate(['paciente', id]);
  }

  goToCreate(){
    this.router.navigate(['add_paciente'])
  }


}
