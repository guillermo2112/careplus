import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SpecialtyService } from '../../specialty.service';
import { Specialty } from '../../specialty';
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
      // new Specialty(1, 'Calle Principal'),
      // new Specialty(2,'Avenida del Sol'),
      // new Specialty(3,  'Boulevard de la Salud'),
      // new Specialty(4, 'Calle de la Esperanza'),
      // new Specialty(5,  'Alfonso Comín, 7'),
  
  }
  private listSpecialty(){
    this.specialtyService.listSpecialty().subscribe(dato =>{
      this.specialty = dato;
    });
   }

}
