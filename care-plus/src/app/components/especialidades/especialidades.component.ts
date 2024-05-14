import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SpecialtyService } from '../../specialty.service';
import { Specialty } from '../../specialty';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.css'
})
export class EspecialidadesComponent implements OnInit{


  specialty:Specialty[];
  constructor(
    private specialtyService: SpecialtyService,
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private listSpecialty(){
    this.specialtyService.listSpecialty().subscribe(dato =>{
      this.specialty = dato;
    });
   }

}
