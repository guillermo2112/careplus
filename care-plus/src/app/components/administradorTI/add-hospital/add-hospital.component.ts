// import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { Hospital, Province } from '../../../entities/Hospital';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { OnDutty } from '../../../entities/OnDutty';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css'],
  standalone : true,
  imports: [FormsModule]
})
export class AddHospitalComponent  implements OnInit{

  hospital: Hospital = new Hospital();
  province: Province = new Province();
  id: number;

  constructor(
    private hospitalServicio: HospitalService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.hospital.province = this.province;
    this.hospital.onDutty = OnDutty.ACTIVE;
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.hospitalServicio.obtener_hospital_id(this.id).subscribe(dato => {
      this.hospital = dato;
    });
  }

  saveHospital() {
    this.hospitalServicio.createHospital(this.hospital).subscribe(
      dato => {
        console.log(dato);
        Swal.fire({
          title: "Success",
          text: "Clinica creada con éxito",
          icon: "success"
        }).then(() => {
            this.obtener_hospitales();
          
        });
        
      }
    );
  }

  obtener_hospitales() {
    this.router.navigate(['/clinicas-admin']);
  }

  onSubmit() {
    this.saveHospital();
    
  }

}