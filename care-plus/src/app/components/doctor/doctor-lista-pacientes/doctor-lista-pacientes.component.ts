import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../entities/Patient';
import { PacienteService } from '../../../services/paciente.service';
import { Router } from '@angular/router';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ClinicaProfile } from '../../../entities/ClinicaProfile';
import { ClinicasProfileService } from '../../../services/clinicas-profile.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-doctor-lista-pacientes',
    standalone: true,
    templateUrl: './doctor-lista-pacientes.component.html',
    styleUrl: './doctor-lista-pacientes.component.css',
    imports: [
        FormsModule,
        CommonModule,
        DoctorSidebarComponent,
        HeaderComponent
    ]
})
export class DoctorListaPacientesComponent implements OnInit{

  pacientes:Paciente [] = [];
  pacientes_clear:Paciente [] = [];
  perfil:ClinicaProfile = new ClinicaProfile();
  name:string;
  ide:string;

  constructor(private paciente_service:PacienteService, private router:Router,private perfilService:ClinicasProfileService){}

  ngOnInit(): void {
    this.obtener_pacientes();
  }

  obtener_pacientes(){
    this.paciente_service.getPatient().subscribe(dato =>{
      console.log(dato);
      this.pacientes=dato;
      this.pacientes_clear=dato;
      // this.existe_clinical_profile(dato);
    })
  }

  // async existe_clinical_profile(id:number){

  //   let existProfile: boolean = await this.perfilService.comprobarPelfilClinico(id);
  //   console.log(existProfile);
  //   if(existProfile){
  //     return true
  //   }else{
  //     return false;
  //   }
  // }

  async existe_clinical_profile(id:number){
    try {
      
        let existeDni: Boolean = await this.perfilService.comprobarPelfilClinico(id);
        
       console.log(existeDni);
      
    } catch (error) {
      console.error("Error validando el DNI", error);
    }
  }

  goToClinicalProfile(id:number){
    this.perfilService.devolverPerfilId(id).subscribe(dato =>{
      this.router.navigate(['doctor-clinical-profile',dato]);
    })
  }

  ponerPerfil(id:number){
    this.paciente_service.getPatientById(id).subscribe(dato =>{
      this.perfil.patient = dato;
      this.crearPerfilClinico();
    });
  }

  crearPerfilClinico(){
    
    this.perfil.date = this.getFormattedDate();
    this.perfil.allergy='';
    this.perfil.report='';
    console.log(this.perfil);
    this.perfilService.createClinicasProfile(this.perfil).subscribe(dato =>{
      console.log(this.perfil);
      alert();
    });

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

  limpiar_filtros(): void {
    this.pacientes = [...this.pacientes_clear];
    this.name = '';
    this.ide='';
  }

  burcador_id(): void {
    const id = Number(this.ide);

    if (isNaN(id)) {
      Swal.fire({
        title: "Error",
        text: "El ID ingresado no es válido",
        icon: "error"
      });
      return;
    }

    this.pacientes = this.pacientes_clear.filter(Paciente => Paciente.id === id);

    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Mantenimiento",
        text: "No se han encontrado doctores con el id buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  burcador_nombre(): void {
    const nombres = this.name.toLowerCase().split(' ');
    this.pacientes = this.pacientes_clear.filter(s => {
      return nombres.every(name => s.name.toLowerCase().includes(name));
    });
    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado doctores con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

}
