import { Component } from '@angular/core';
import { Paciente } from '../../../entities/paciente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPacienteService } from '../../../services/add-paciente.service';

@Component({
  selector: 'app-add-paciente',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-paciente.component.html',
  styleUrl: './add-paciente.component.css'
})
export class AddPacienteComponent {

  paciente : Paciente =  new Paciente();

  constructor(private servicio:AddPacienteService){}

  onSubmit(){
    console.log(this.paciente);
    this.guardarPaciente();
  }

  guardarPaciente(){
    this.servicio.crear_paciente(this.paciente);
    alert("usuario añadido");
  }

}
