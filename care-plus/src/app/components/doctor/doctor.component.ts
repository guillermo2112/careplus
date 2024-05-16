import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../doctor.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent implements OnInit{


  doctor:any[] = [];
  
  constructor(
    private doctorService: DoctorService,
    private router: Router,
  ) {}

  
  
  ngOnInit(): void {
    this.listDoctor();

     
  
  }

  getDoctorById(doctorId: number) {
    this.doctorService.getDoctorId(doctorId).subscribe(dato => {
      this.doctor = [dato]; 
    });
  }
  

  private listDoctor(){
    this.doctorService.listDoctor().subscribe(dato =>{
      this.doctor = dato;
      
    });
  }

   
  updateDoctor(id: number) {
    this.router.navigate(['updateDoctor', id]);
  }

//  
// FALTA EL CREATE
// 

  // verDetallesDelEmpleado(username: string) {
  //   this.router.navigate(['/usuarioDetalles', username]); 
  // }
}
