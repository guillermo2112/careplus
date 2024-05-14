import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../hospital.model';
import { HospitalService } from '../../hospital.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clinicas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './clinicas.component.html',
  styleUrl: './clinicas.component.css'
})
export class ClinicasComponent implements OnInit{

  constructor(private hospital_service:HospitalService){}

  hospitales:any[] = [];

  ngOnInit(): void {
    this.obtener_hospitales();

    /*this.hospitales.push(
      new Hospital(1, 350, 'Calle Principal', 'Hospital Central', '555-123-4567'),
      new Hospital(2, 200, 'Avenida del Sol', 'Hospital del Este', '555-987-6543'),
      new Hospital(3, 150, 'Boulevard de la Salud', 'Hospital del Norte', '555-321-6789'),
      new Hospital(4, 500, 'Calle de la Esperanza', 'Hospital Occidental', '555-789-0123'),
      new Hospital(5, 18023 , 'Alfonso Comín, 7', 'Hospital Quirónsalud', '932-554-000'),
    );
    */
    
    
  }

  private obtener_hospitales(){
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      this.hospitales = dato;
    });
  }

}
