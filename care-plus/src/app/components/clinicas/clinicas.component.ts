import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../hospital.model';

@Component({
  selector: 'app-clinicas',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './clinicas.component.html',
  styleUrl: './clinicas.component.css'
})
export class ClinicasComponent implements OnInit{

  hospitales:Hospital[];

  nombre: string = "hola"

  ngOnInit(): void {
    this.hospitales.push(
      new Hospital(1, 100, 'Dirección del Hospital 1', 'Hospital 1', '123-456-7890'),
      new Hospital(2, 150, 'Dirección del Hospital 2', 'Hospital 2', '123-456-7891'),
      new Hospital(3, 200, 'Dirección del Hospital 3', 'Hospital 3', '123-456-7892'),
      new Hospital(4, 250, 'Dirección del Hospital 4', 'Hospital 4', '123-456-7893')
    );
  }

  private obtener_hospitales(){

  }

}
