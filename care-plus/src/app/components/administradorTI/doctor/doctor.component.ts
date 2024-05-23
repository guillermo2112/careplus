import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Doctor } from '../../../entities/doctor';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctores: Doctor[] = [];


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
      console.log(this.doctores);
 
    });
  }

  updateDoctor(id: number) {
    this.router.navigate(['update-doctor', id]);
  }

  goToCreate(){
    this.router.navigate(['add-doctor'])
  }

  // createDoctor(id: number) {
  //   this.doctorService.createDoctor(id).subscribe(dato => {
  //     this.doctor = [dato]; 
  //   });
  // }

}
