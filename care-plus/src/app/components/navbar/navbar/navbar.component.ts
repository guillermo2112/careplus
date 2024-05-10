import { Component } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [LogoComponent,
        RouterModule]
})
export class NavbarComponent {

}
