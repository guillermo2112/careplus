import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { CardespecialidadesComponent } from "./cardespecialidades/cardespecialidades.component";
import { NewsComponent } from "./news/news.component";
import { DoctoreshomeComponent } from "./doctoreshome/doctoreshome.component";
import { InfoComponent } from "./info/info.component";

@Component({
    selector: 'app-homepaciente',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarouselComponent, CardespecialidadesComponent, NewsComponent, DoctoreshomeComponent, InfoComponent]
})
export class HomeComponent {

}
