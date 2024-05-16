import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { CardespecialidadesComponent } from "./cardespecialidades/cardespecialidades.component";
import { NewsComponent } from "./news/news.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarouselComponent, CardespecialidadesComponent, NewsComponent]
})
export class HomeComponent {

}
