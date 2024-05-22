// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { Hospital, Province } from '../../../entities/Hospital';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css'],
  standalone : true,
  imports: [FormsModule]
})
export class AddHospitalComponent {

  hospital: Hospital = new Hospital();
  province: Province = new Province();
  //this.hospital.phone="sdaad";

  constructor(
    private hospitalServicio: HospitalService,
    private router: Router
  ) {
    this.hospital.province = this.province;
  }

  saveHospital() {
    // if (!this.hospital.name) {
    //   console.error("El nombre es obligatorio.");
    //   return;
    // }
console.log("pre")
    this.hospitalServicio.createHospital(this.hospital).subscribe(
      
      dato => {
        console.log("probando",dato);
        console.log("Hosp: ", this.hospital);
        // this.obtener_hospitales();
        // window.location.href = '/clinica';
      }
      ,
      error => {
        console.log(error);
      }
    );
  }

  obtener_hospitales() {
    this.router.navigate(['/clinicas']);
    // window.location.href = '/clinicas';
  }

  onSubmit() {
    console.log("hola");
    this.saveHospital();
    console.log("chao");
    
  }

}