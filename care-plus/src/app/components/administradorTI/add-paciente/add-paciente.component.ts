import { Component } from '@angular/core';
import { Paciente } from '../../../entities/paciente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPacienteService } from '../../../services/add-paciente.service';
import { Usuario } from '../../../entities/usuario';
import { Dato } from './Dato';

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
  usuario : Usuario = new Usuario();
  usuarios : any [] = [];

  constructor(private servicio:AddPacienteService){}

  onSubmit(){
    this.guardarUsuario();
  }

  

  guardarUsuario(){
    this.servicio.crear_usuario(this.usuario).subscribe((dato: any) => {
      this.guardarPaciente(dato);
    });
    
    
  }

  guardarPaciente(usu:Usuario){
    this.paciente.id_user=usu;
    this.servicio.crear_paciente(this.paciente)  
  }

}
