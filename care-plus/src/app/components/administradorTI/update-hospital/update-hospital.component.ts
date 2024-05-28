import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { Hospital } from '../../../entities/Hospital';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-hospital',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-hospital.component.html',
  styleUrl: './update-hospital.component.css'
})
export class UpdateHospitalComponent implements OnInit{

  hospital: Hospital = new Hospital();

  constructor(
    private hospitalService: HospitalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hospital.id = history.state.hospitalId;
    this.hospitalService.obtener_hospital_id(this.hospital.id).subscribe(dato => {
      this.hospital = dato;
    });
  }

  saveHospital() {
    this.hospitalService.updateHospital(this.hospital.id, this.hospital).subscribe(
      dato => {
        Swal.fire({
          title: "Success",
          text: "Especilidad actualizada con éxito",
          icon: "success"
        }).then(() => {
            this.goToListhospital();
          
        });
        
      }
    );
  }

  goToListhospital() {
    this.router.navigate(['/clinicas-admin']);
  }

  onSubmit() {
    this.saveHospital();
  }

}
