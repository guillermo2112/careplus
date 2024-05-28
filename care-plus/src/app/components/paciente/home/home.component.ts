import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { CardespecialidadesComponent } from "./cardespecialidades/cardespecialidades.component";
import { NewsComponent } from "./news/news.component";
import { DoctoreshomeComponent } from "./doctoreshome/doctoreshome.component";
import { InfoComponent } from "./info/info.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarouselComponent, CardespecialidadesComponent, NewsComponent, DoctoreshomeComponent, InfoComponent, HomeComponent, NavbarComponent, HeaderComponent]
})
export class HomeComponent {

}
