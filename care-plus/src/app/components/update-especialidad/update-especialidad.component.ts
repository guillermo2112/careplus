// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DoctorService } from '../../services/doctor.service';
// import { Doctor } from '../../entities/doctor';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-update-specialty',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './update-specialty.component.html',
//   styleUrl: './update-specialty.component.css'
// })
// export class UpdateSpecialtyComponent implements OnInit{

//   id: number;
//   doctor: Doctor;


//   constructor(
//     private doctorService: DoctorService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.doctorService.getDoctorId(this.id).subscribe(dato => {
//       this.doctor = dato;
//     });
//   }

//   saveDoctor() {
//     this.doctorService.updateDoctor(this.id, this.doctor).subscribe(
//       dato => {
//         console.log(dato);
//         this.goToListDoctor();
//       }
//     );
//   }

//   goToListDoctor() {
//     this.router.navigate(['/doctor']);
//   }

//   onSubmit() {
//     this.saveDoctor();
//   }

// }
