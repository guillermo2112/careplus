import { Component, OnInit } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { Doctor } from '../../../entities/Doctor';
import { DoctorService } from '../../../services/doctor.service';
import { Router } from '@angular/router';
import { DoctorProfileComponent } from "../doctor-profile/doctor-profile.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-doctor-home',
    standalone: true,
    templateUrl: './doctor-home.component.html',
    styleUrl: './doctor-home.component.css',
    imports: [DoctorSidebarComponent, DoctorProfileComponent, HeaderComponent]
})
export class DoctorHomeComponent implements OnInit{
    doctores: Doctor[] = [];
    doctor: any;
    
      constructor(
        private doctorService: DoctorService,
        private router: Router
      ) {}
    
      ngOnInit(): void {
        this.listDoctor();
      }
    
      trackById(index: number, doctor: Doctor): number {
        return doctor.id;
      }
    
      detalles_doctor(id:number){
        this.router.navigate(['doctor-vista',id]);
      }
    
      private listDoctor() {
        this.doctorService.listDoctor().subscribe(dato => {
          this.doctores = dato;
     
        });
      }
    
      updateDoctor(id: number) {
        this.router.navigate(['update-doctor', id]);
      }
    
      goToCreate(){
        this.router.navigate(['add-doctor'])
      }
}
