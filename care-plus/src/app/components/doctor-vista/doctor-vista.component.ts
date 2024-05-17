import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../doctor.service';
import { Doctor } from '../../doctor';

@Component({
  selector: 'app-doctor-vista',
  templateUrl: './doctor-vista.component.html',
  styleUrls: ['./doctor-vista.component.css']
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
}
