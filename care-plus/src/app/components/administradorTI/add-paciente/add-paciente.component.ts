import { Component } from '@angular/core';
import { Paciente } from '../../../entities/Patient';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../entities/usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { ClinicaProfile } from '../../../entities/ClinicaProfile';
import { ClinicasProfileService } from '../../../services/clinicas-profile.service';
import { DatosPacienteComponent } from '../update-paciente/datos-paciente.component';

@Component({
    selector: 'app-add-paciente',
    standalone: true,
    templateUrl: './add-paciente.component.html',
    styleUrl: './add-paciente.component.css',
    imports: [FormsModule, HeaderComponent, AdminSidebarComponent]
})

export class AddPacienteComponent {

  paciente : Paciente =  new Paciente();
  usuario : Usuario = new Usuario();
  perfil : ClinicaProfile = new ClinicaProfile();
  confirm_password:string;

  constructor(
    private patientService:PacienteService,
    private perfilService:ClinicasProfileService,
    private router:Router
  ){ this.confirm_password = ""; }


  async onSubmit() {
    try {
      if (this.usuario.password == "" || this.confirm_password == "") {
        Swal.fire({
          title: "Error!",
          text: "Las contraseñas no pueden estar vacías.",
          icon: "error"
        });
      } else if (this.usuario.password != this.confirm_password) {
        Swal.fire({
          title: "Error!",
          text: "Las contraseñas no coinciden.",
          icon: "error"
        });
      } else {
        let existeDni: Boolean = await this.patientService.validarDni(this.paciente.dni);
        
        if(existeDni){
          Swal.fire({
            title: "Error!",
            text: "El DNI ya existe.",
            icon: "error"
          });
        } else {
          this.guardarUsuario();
        }
      }
    } catch (error) {
      console.error("Error validando el DNI", error);
    }
  }
  
      

  guardarUsuario(){
    this.usuario.role='ROLE_PATIENT'
    this.patientService.createUser(this.usuario).subscribe((dato: any) => {
      this.guardarPaciente(dato);
    });
      
  }

  guardarPaciente(usu:Usuario){
    this.paciente.user = usu;
    this.patientService.createPatient(this.paciente).subscribe((dato: any) =>{
      Swal.fire({
        title: "Enhorabuena!",
        text: "Paciente creado con exito.",
        icon: "success"
      });
      this.router.navigate(['/admin-paciente']);
    }); 
  }
 

}
