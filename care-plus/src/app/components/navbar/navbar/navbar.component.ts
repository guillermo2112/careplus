import { Component } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";
import { Router, RouterModule } from '@angular/router';


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
