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
    "Juan Perez",
    "12345678X",
    "1980-01-01",
    "Calle Falsa 123",
    "555-1234",
    "555-5678");

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
      this.servicio.crear_paciente(this.paci).subscribe(dato =>{
        console.log(dato);
      });
  
      }

}
