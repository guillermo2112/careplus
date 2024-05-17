import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import { Router, RouterModule } from '@angular/router';
import { Doctor } from '../../entities/doctor';

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

  doctor: Doctor[] = [];
  selectedDoctor: Doctor | null = null;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listDoctor();
  }

  getDoctorById(doctorId: number) {
    this.doctorService.getDoctorId(doctorId).subscribe(dato => {
      this.selectedDoctor = dato;
    });
  }

  trackById(index: number, doctor: Doctor): number {
    return doctor.id;
  }

  private listDoctor() {
    this.doctorService.listDoctor().subscribe(dato => {
      this.doctor = dato;
    });
  }

  updateDoctor(id: number) {
    this.router.navigate(['updateDoctor', id]);
  }

  // createDoctor(id: number) {
  //   this.doctorService.createDoctor(id).subscribe(dato => {
  //     this.doctor = [dato]; 
  //   });
  // }

}
