import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CarouselComponent } from "./components/carousel/carousel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, CarouselComponent]
})
export class AppComponent {
  title = 'care-plus';
}
