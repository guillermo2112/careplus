import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Doctor } from '../../../entities/doctor';
import { DoctorService } from '../../../services/doctor.service';
import { HomeAdminComponent } from "../home-admin/home-admin.component";

@Component({
    selector: 'app-admin-doctor',
    standalone: true,
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css'],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        HomeAdminComponent
    ]
})
export class AdminDoctorComponent implements OnInit {

  doctores: Doctor[] = [];

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listDoctor();
  }

  private listDoctor() {
    console.log("Tester");
    this.doctorService.listDoctor().subscribe(dato => {
      this.doctores = dato;
      console.log("Doctores: ",this.doctores);
 
    });
  }

}
