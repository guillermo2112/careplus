import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DoctorService } from '../../../services/doctor.service';
import { SpecialtyService } from '../../../services/specialty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialty } from '../../../entities/specialty';
import { Doctor } from '../../../entities/Doctor';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";

@Component({
    selector: 'app-doctor-clinical-profile',
    standalone: true,
    templateUrl: './doctor-clinical-profile.component.html',
    styleUrl: './doctor-clinical-profile.component.css',
    imports: [DoctorSidebarComponent]
})
export class DoctorClinicalProfileComponent {

  id: number;
  doctor: Doctor;
  specialties: Specialty[];


  constructor(
    private doctorService: DoctorService,
    private specialityService: SpecialtyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.doctorService.getDoctorId(this.id).subscribe(dato => {
      this.doctor = dato;
    });

    this.specialityService.listSpecialty().subscribe(dato => {
      this.specialties = dato;
    });
  }

  saveDoctor() {
    this.doctorService.updateDoctor(this.id, this.doctor).subscribe(
      dato => {
        Swal.fire({
          title: "Success",
          text: "Especilidad actualizada con éxito",
          icon: "success"
        }).then(() => {
            this.goToListDoctor();
          
        });
      }
    );
  }

  goToListDoctor() {
    this.router.navigate(['/admin-doctor']);
  }

  onSubmit() {

    this.saveDoctor();
  }

}
