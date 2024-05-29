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
    this.guardarPerfil(dato);
      Swal.fire({
        title: "Enhorabuena!",
        text: "Paciente creado con exito.",
        icon: "success"
      });
      this.router.navigate(['/admin-paciente']);
    }); 
  }

  guardarPerfil(paciente:Paciente){
    this.perfil.patient = paciente;
    this.perfil.date = this.getFormattedDate();
    this.perfil.allergy='';
    this.perfil.report='';
    this.perfilService.createClinicasProfile(this.perfil).subscribe();

  }

  getFormattedDate(): string {
    const now = new Date();
    return this.formatDate(now);
  }

  private formatDate(date: Date): string {
    const pad = (num: number) => num.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

    const timezoneOffsetMinutes = date.getTimezoneOffset();
    const absTimezoneOffset = Math.abs(timezoneOffsetMinutes);
    const timezoneHours = pad(Math.floor(absTimezoneOffset / 60));
    const timezoneMinutes = pad(absTimezoneOffset % 60);
    const timezoneSign = timezoneOffsetMinutes <= 0 ? '+' : '-';

    const timezoneOffset = `${timezoneSign}${timezoneHours}:${timezoneMinutes}`;

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneOffset}`;
  }
  

}
