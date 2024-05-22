import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { Hospital } from '../../../entities/hospital.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-hospital',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-hospital.component.html',
  styleUrl: './update-hospital.component.css'
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
      this.hospital = dato;
    });
  }

  saveHospital() {
    this.hospitalService.updateHospital(this.id, this.hospital).subscribe(
      dato => {
        console.log(dato);
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
    this.router.navigate(['/clinicas']);
  }

  onSubmit() {
    this.saveHospital();
  }

}
