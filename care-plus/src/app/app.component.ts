import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/paciente/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

import { HospitalService } from './services/hospital.service';
import { CarouselComponent } from './components/paciente/home/carousel/carousel.component';
import { CardespecialidadesComponent } from './components/paciente/home/cardespecialidades/cardespecialidades.component';
import { HomeComponent } from './components/paciente/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, CarouselComponent, CardespecialidadesComponent, HomeComponent]
})
export class AppComponent{
  constructor (private hospital: HospitalService){}

  title = 'care-plus';
}
