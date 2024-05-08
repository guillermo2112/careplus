import { Component } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";


@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [LogoComponent]
})
export class NavbarComponent {

}
