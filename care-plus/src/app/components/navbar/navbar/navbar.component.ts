import { Component } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [LogoComponent,
        RouterModule,
        CommonModule
    ]
})
export class NavbarComponent {

    constructor(private router:Router){}

    ir_iniciar_sesion(){
        this.router.navigate(['/iniciar_sesion'])
    }
}
