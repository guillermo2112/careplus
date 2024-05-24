import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../entities/paciente';
import { PacienteService } from '../../../services/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-lista-pacientes',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './doctor-lista-pacientes.component.html',
  styleUrl: './doctor-lista-pacientes.component.css'
})
export class DoctorListaPacientesComponent implements OnInit{

  pacientes:any [] = [];

  constructor(private paciente_service:PacienteService, private router:Router){}

  ngOnInit(): void {
    this.obtener_pacientes();
  }

  obtener_pacientes(){
    this.paciente_service.obtener_pacientes().subscribe(dato =>{
      this.pacientes=dato;
    })
  }

  detalles_paciente(id:number){
    this.router.navigate(['paciente',id]);
  }

}
