import { Component } from '@angular/core';
import { Paciente } from '../../../entities/paciente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPacienteService } from '../../../services/add-paciente.service';
import { Usuario } from '../../../entities/usuario';
import { Dato } from './Dato';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private servicio:AddPacienteService,private router:Router){}

  onSubmit(){
    this.guardarUsuario();
    Swal.fire({
      title: "Enhorabuena!",
      text: "Usuario creado con exito",
      icon: "success"
    });
  }

  

  guardarUsuario(){
    this.servicio.crear_usuario(this.usuario).subscribe((dato: any) => {
      this.guardarPaciente(dato);
    });
    
    
  }

  guardarPaciente(usu:Usuario){
    this.paciente.id_user=usu;
    this.servicio.crear_paciente(this.paciente).subscribe(dato =>{
      
      this.router.navigate(['/lista_pacientes']);
    })  
  }

}
