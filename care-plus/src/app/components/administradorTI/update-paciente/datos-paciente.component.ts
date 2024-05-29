import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../entities/Patient';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { OnDutty } from '../../../entities/OnDutty';

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
  ){
    this.paciente = new Paciente();

  }

  id: number;
  paciente: Paciente;

  pacienteId: number;

  onDuttyArray = [
    { id: 1, value: OnDutty.ACTIVE, label: 'ACTIVE' },
    { id: 2, value: OnDutty.INACTIVE, label: 'INACTIVE' },
    { id: 3, value: OnDutty.SUSPENDED, label: 'SUSPENDED' }
  ];
    selectedOnDutty:any;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pacienteId = history.state.pacienteid; 
    this.infopaciente();
  }

  infopaciente(){
      if (!this.paciente) {
        this.paciente = new Paciente();
      }
  
      this.pacienteService.getPatientById(this.pacienteId).subscribe((dato) => {
        this.paciente = dato;
        this.selectedOnDutty = this.paciente.id_user.onDutty;

      });
    
  }

  savePaciente() {
    this.pacienteService.updatePatient(this.pacienteId, this.paciente).subscribe(
      dato => {
        this.paciente.id_user.onDutty=this.selectedOnDutty;
        console.log(dato);
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
    this.router.navigate(['/admin-paciente']);
  }

  onSubmit() {

    this.savePaciente();
  }
}
