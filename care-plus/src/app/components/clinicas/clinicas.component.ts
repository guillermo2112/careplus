import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinicas',
  standalone: true,
  imports: [],
  templateUrl: './clinicas.component.html',
  styleUrl: './clinicas.component.css'
})
export class ClinicasComponent implements OnInit{

  nombre: string = "hola"

  ngOnInit(): void {
    this.obtener_hospitales();
    nombre:'hola';
  }

  private obtener_hospitales(){

  }

}
