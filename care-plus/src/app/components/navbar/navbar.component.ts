import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';


@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [LogoComponent,
        RouterModule
    ]
})
export class NavbarComponent {

    constructor(private router:Router){}

    ir_inicio_sesion(){
        this.router.navigate(["/inicio_sesion"])
    }

}
