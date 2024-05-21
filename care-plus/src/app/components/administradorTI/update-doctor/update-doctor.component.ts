import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../entities/doctor';
import { FormsModule } from '@angular/forms';

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


  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.doctorService.getDoctorId(this.id).subscribe(dato => {
      this.doctor = dato;
    });
  }

  saveDoctor() {
    this.doctorService.updateDoctor(this.id, this.doctor).subscribe(
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
    if(this.doctor.user.onDutty)
      this.doctor.user.onDutty = "ACTIVE"

    if(!this.doctor.user.onDutty)
      this.doctor.user.onDutty = "INACTIVE"
    
    this.saveDoctor();
  }

}
