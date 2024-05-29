import { Component, OnInit } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { DoctorService } from '../../../services/doctor.service';
import { Router } from '@angular/router';
import { HospitalService } from '../../../services/hospital.service';
import { PacienteService } from '../../../services/paciente.service';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-admin-home',
    standalone: true,
    templateUrl: './admin-home.component.html',
    styleUrl: './admin-home.component.css',
    imports: [ HeaderComponent]
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





    
}
