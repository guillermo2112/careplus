import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../entities/Doctor';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Specialty } from '../../../entities/specialty';
import { SpecialtyService } from '../../../services/specialty.service';


@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-doctor.component.html',
  styleUrl: './update-doctor.component.css'
})
export class UpdateDoctorComponent implements OnInit{

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
        console.log(dato);
        Swal.fire({
          title: "Success",
          text: "Doctor actualizado con éxito",
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
