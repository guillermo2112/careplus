import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../entities/Patient';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-paciente',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './datos-paciente.component.html',
  styleUrl: './datos-paciente.component.css'
})
export class DatosPacienteComponent implements OnInit{

  constructor(
    private pacienteService:PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  id: number;
  paciente: Paciente;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pacienteService.getPatientById(this.id).subscribe(dato => {
      this.paciente = dato;
    });

   
  }

  savePaciente() {
    this.pacienteService.updatePatient(this.id, this.paciente).subscribe(
      dato => {
        Swal.fire({
          title: "Success",
          text: "Doctor actualizado con éxito",
          icon: "success"
        }).then(() => {
            this.goToListDoctor();
          
        });
      }
    );
  }

  goToListDoctor() {
    this.router.navigate(['/admin-doctor']);
  }

  onSubmit() {

    this.savePaciente();
  }
}
