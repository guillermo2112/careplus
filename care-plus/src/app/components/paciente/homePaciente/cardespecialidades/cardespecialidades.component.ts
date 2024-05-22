import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardespecialidadespaciente',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cardespecialidades.component.html',
  styleUrl: './cardespecialidades.component.css'
})
export class CardespecialidadesComponent {

  constructor(private router:Router){}

}

