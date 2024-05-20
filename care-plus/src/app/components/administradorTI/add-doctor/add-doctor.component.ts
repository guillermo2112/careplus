import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../entities/doctor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  doctor: Doctor;
  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  saveDoctor() {
    this.doctorService.createDoctor(this.doctor).subscribe(
      dato => {
        console.log(dato);
        this.goToListDoctor();
      }
    );
  }

  goToListDoctor() {
    this.router.navigate(['/doctor']);
  }

  onSubmit() {
    this.saveDoctor();
  }

}

