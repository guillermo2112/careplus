import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DoctorService } from '../../../services/doctor.service';
import { SpecialtyService } from '../../../services/specialty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialty } from '../../../entities/specialty';
import { Doctor } from '../../../entities/Doctor';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { FormsModule } from '@angular/forms';
import { ClinicaProfile } from '../../../entities/ClinicaProfile';
import { ClinicasProfileService } from '../../../services/clinicas-profile.service';
import { info } from 'console';

@Component({
    selector: 'app-doctor-clinical-profile',
    standalone: true,
    templateUrl: './doctor-clinical-profile.component.html',
    styleUrl: './doctor-clinical-profile.component.css',
    imports: [DoctorSidebarComponent,FormsModule]
})
export class DoctorClinicalProfileComponent {

  id: number;
  clinaprofile:ClinicaProfile;
  specialties: Specialty[];


  constructor(
    private profileService: ClinicasProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.profileService.getClinicasProfileId(this.id).subscribe(dato =>{
      console.log(dato);
      if(!dato){
        console.log('esta vacio'+dato);
      }else{
        this.clinaprofile = dato;
      }
    });
  }

  onSubmit() {

    Swal.fire({
      icon:'info',
      title:'FormSubmit'
    })
  }

}
