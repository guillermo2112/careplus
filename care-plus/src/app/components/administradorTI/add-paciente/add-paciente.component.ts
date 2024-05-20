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
  paci:Paciente = new Paciente(0,
    "Maria Gomez",
    "87654321Y",
    "1990-02-02",
    "Avenida Siempre Viva 742",
    "555-6789",
    "555-9876");

  constructor(private servicio:AddPacienteService){}



  onSubmit(){
    console.log(this.usuario);
    console.log(this.paciente);
    this.guardarUsuario();
    this.guardarPaciente(this.usuario);
  }

  

  guardarUsuario(){
    this.servicio.crear_usuario(this.usuario).subscribe((dato: any) => {
      console.log(dato.id); 
      console.log("añade paciente");
      console.log(this.paciente);
        this.guardarPaciente(dato);
    });
    
    
  }

  guardarPaciente(usu:Usuario){
    /*this.paciente.usuario=usu;
    console.log(this.paciente);
    */
      this.paci.usuario=usu;
      console.log(this.paci);
      this.servicio.crear_paciente(this.paciente).subscribe(dato =>{
        console.log(dato);
      });
  
      }

}
