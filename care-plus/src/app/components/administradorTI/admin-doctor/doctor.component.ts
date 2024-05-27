import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Doctor } from '../../../entities/Doctor';
import { DoctorService } from '../../../services/doctor.service';
import {AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";

@Component({
    selector: 'app-admin-doctor',
    standalone: true,
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css'],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        AdminSidebarComponent,
    ]
})
export class AdminDoctorComponent implements OnInit {

  doctores: Doctor[] = [];
  itemsPerPage: number = 9;
  currentPage: number = 0;
  totalPages: number = 0;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listDoctor();
  }

  private listDoctor() {
    this.doctorService.listDoctor().subscribe(dato => {
      this.doctores = dato;
      this.totalPages = Math.ceil(this.doctores.length / this.itemsPerPage);
    });
  }

  prevPage(event: Event) {
    event.preventDefault();
    if (this.currentPage > 0) {
      this.setPage(event, this.currentPage - 1);
    }
  }

  nextPage(event: Event) {
    event.preventDefault();
    if (this.currentPage < this.totalPages - 1) {
      this.setPage(event, this.currentPage + 1);
    }
  }

  setPage(event: Event, pageIndex: number) {
    event.preventDefault();
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.currentPage = pageIndex;
    }
  }

  chunkArray(myArray: any[], chunk_size: number) {
    const results = [];
    for (let i = 0; i < myArray.length; i += chunk_size) {
      results.push(myArray.slice(i, i + chunk_size));
    }
    return results;
  }

  updateDoctor(id: number) {
    this.router.navigate(['update-doctor', id]);
  }

  goToCreate(){
    this.router.navigate(['add-doctor'])
  }


}
