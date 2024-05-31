import { Component, OnInit } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { DoctorService } from '../../../services/doctor.service';
import { Router } from '@angular/router';
import { HospitalService } from '../../../services/hospital.service';
import { PacienteService } from '../../../services/paciente.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { LogoComponent } from "../../shared/logo/logo.component";

@Component({
    selector: 'app-admin-home',
    standalone: true,
    templateUrl: './admin-home.component.html',
    styleUrl: './admin-home.component.css',
    imports: [HeaderComponent, AdminSidebarComponent, LogoComponent]
})
export class AdminHomeComponent implements OnInit {

    doctorCount: number = 0;
    hospitalCount: number = 0;
    pacienteCount: number = 0;



    constructor(
      private doctorService: DoctorService,
      private hospitalService : HospitalService,
      private pacienteService : PacienteService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      // this.validarAdmin();
      this.contadorHospital();
      this.contadorDoctor();
      this.contadorPaciente();
      

      
    }
  
    private contadorHospital() {
      this.hospitalService.obtener_hospitales().subscribe(hospitales => {
        this.hospitalCount = hospitales.length;
      });
    }
    
    private contadorDoctor() {
        this.doctorService.listDoctor().subscribe(doctores => {
          this.doctorCount = doctores.length;
        });
      }
      private contadorPaciente() {
        this.pacienteService.getPatient().subscribe(paciente => {
          this.pacienteCount = paciente.length;
        });
      }

  

    // validarAdmin(): void{

    //   let rol:String = sessionStorage.getItem('role');
    //   let resultado:Boolean = false;
    //   console.log("Rol:", rol);

    //   if(rol == `["ROLE_ADMIN"]`){
    //     console.log("Es Admin");
    //   } else if (rol == `["ROLE_DOCTOR"]`){
    //     console.log("Es Doctor");
    //     this.router.navigate(['/doctor-profile']);
    //   } else if (rol == `["ROLE_PATIENT"]`){
    //     console.log("Es Paciente");
    //     this.router.navigate(['/regitrado-profile']);
    //   }
    // }





    
}
