import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SpecialtyService } from '../../specialty.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.css'
})
export class EspecialidadesComponent implements OnInit{


  specialty:any[] = [];
  constructor(
    private specialtyService: SpecialtyService,
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    this.listSpecialty();
     
  
  }
  private listSpecialty(){
    this.specialtyService.listSpecialty().subscribe(dato =>{
      this.specialty = dato;
    });
   }


     
  updateSpecialty(id: number) {
    this.router.navigate(['updateSpecialty', id]);
  }

  getSpecialtyById(id: number) {
    this.specialtyService.getSpecialtyById(id).subscribe(dato => {
      this.specialty = [dato]; 
    });
  }
  
  // createSpecialty(id: number) {
  //   this.specialtyService.createSpecialty(id).subscribe(dato => {
  //     this.specialty = [dato]; 
  //   });
  // }

  


//  
// FALTA EL CREATE
// 
}
