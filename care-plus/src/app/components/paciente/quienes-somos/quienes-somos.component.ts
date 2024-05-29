import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-quienes-somos',
    standalone: true,
    templateUrl: './quienes-somos.component.html',
    styleUrls: ['./quienes-somos.component.css'],
    imports: [HeaderComponent, NavbarComponent]
})
export class QuienesSomosComponent {

}
