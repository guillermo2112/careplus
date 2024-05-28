import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../../../entities/Doctor';
import { DoctorService } from '../../../services/doctor.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-doctor-vista',
    standalone: true,
    templateUrl: './doctor-vista.component.html',
    styleUrls: ['./doctor-vista.component.css'],
    imports: [HeaderComponent, NavbarComponent]
})
export class DoctorVistaComponent implements OnInit {
  doctor: Doctor | null = null;
  doc:any;
  id:number;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const doctorId = +params['id'];
      this.getDoctorById(doctorId);
    });
  }

  getDoctorById(doctorId: number): void {
    this.doctorService.getDoctorId(doctorId).subscribe(dato => {
      this.doctor = dato;
    });
  }

  volver_doctores(){
    this.router.navigate(['doctor']);
  }
}

