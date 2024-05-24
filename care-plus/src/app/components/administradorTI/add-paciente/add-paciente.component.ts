import { Component } from '@angular/core';
import { Paciente } from '../../../entities/paciente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPacienteService } from '../../../services/add-paciente.service';
import { Usuario } from '../../../entities/usuario';
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
  confirm_password:string='';

  constructor(private servicio:AddPacienteService,private router:Router){}

  onSubmit(){
    if (!this.paciente.id_user.username || !this.usuario.username ||
      !this.paciente.id_user.password || !this.usuario.password ||
      !this.confirm_password ||
      !this.paciente.name || !this.paciente.dni ||
      !this.paciente.birthdate || !this.paciente.address ||
      !this.paciente.phone || !this.paciente.emergency_phone) {
        Swal.fire({
          title: "Error!",
          text: "Todos los campos son obligatorios.",
          icon: "error"
        });
  
      
      }else{
        if(this.paciente.id_user.password!=this.confirm_password || this.confirm_password=="" || this.paciente.id_user.password==""){
          Swal.fire({
            title: "Error!",
            text: "Las contraseñas no coinciden.",
            icon: "error"
          });
        }else{
            this.guardarUsuario();
            Swal.fire({
              title: "Enhorabuena!",
              text: "Paciente creado con exito.",
              icon: "success"
            });
          }

    }
  }

  

  guardarUsuario(){
    this.usuario.role='ROLE_PATIENT'
    this.servicio.crear_usuario(this.usuario).subscribe((dato: any) => {
      this.guardarPaciente(dato);
      console.log("USUARIO "+dato);
    });
      
  }

  guardarPaciente(usu:Usuario){
    this.paciente.id_user=usu;
    
    this.servicio.crear_paciente(this.paciente).subscribe(dato =>{
      console.log("PACIENTE "+dato)
      this.router.navigate(['/lista_pacientes']);
    })  
  }

}
