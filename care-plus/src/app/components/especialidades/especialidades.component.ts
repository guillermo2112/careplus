import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

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


   Especialidades = [
    { img: "Medicina general" },
    { img: "Pediatría" },
    { img: "Ginecología y obstetricia" },
    { img: "Dermatología" },
    { img: "Cardiología" },
    { img: "Neurología" },
    { img: "Oftalmología" },
    { img: "Otorrinolaringología" },
    { img: "Ortopedia" },
    { img: "Psiquiatría" },
    { img: "Alergólogo" },
    { img: "Anestesiólogo" },
    { img: "Endocrinólogo" },
    { img: "Nutricionista" },
    { img: "Cirujano" },
    { img: "Dentista" },
    { img: "Psicólogo" }
];

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
