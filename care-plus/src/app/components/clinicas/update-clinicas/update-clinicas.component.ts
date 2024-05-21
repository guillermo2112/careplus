import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { Hospital } from '../../../entities/hospital.model';

@Component({
  selector: 'app-update-hospital',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-clinicas.component.html',
  styleUrl: './update-clinicas.component.css'
})
export class UpdateHospitalComponent implements OnInit{

  id: number;
  hospital: Hospital;


  constructor(
    private hospitalService: HospitalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.hospitalService.obtener_hospital_id(this.id).subscribe(dato => {
      // this.hospital = dato;
    });
  }

  saveHospital() {
    this.hospitalService.updateHospital(this.id, this.hospital).subscribe(
      dato => {
        console.log(dato);
        this.goToListhospital();
      }
    );
  }

  goToListhospital() {
    this.router.navigate(['/especialidades']);
  }

  onSubmit() {
    this.saveHospital();
  }

}
