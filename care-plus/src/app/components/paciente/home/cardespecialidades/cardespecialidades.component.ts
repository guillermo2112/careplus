import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../shared/header/header.component";
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
    selector: 'app-cardespecialidades',
    standalone: true,
    templateUrl: './cardespecialidades.component.html',
    styleUrl: './cardespecialidades.component.css',
    imports: [RouterModule, HeaderComponent, NavbarComponent]
})
export class CardespecialidadesComponent {

  constructor(private router:Router){}

}

