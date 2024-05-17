import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../doctor.service';
import { Router, RouterModule } from '@angular/router';
import { Doctor } from '../../doctor';

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
      this.doctor = dato;
    });
  }

  updateDoctor(id: number) {
    this.router.navigate(['updateDoctor', id]);
  }
}
