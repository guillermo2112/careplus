import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from "../../shared/logo/logo.component";

@Component({
    selector: 'app-registrado-pedir-cita',
    standalone: true,
    templateUrl: './registrado-pedir-cita.component.html',
    styleUrl: './registrado-pedir-cita.component.css',
    imports: [HeaderComponent, RegistradoSidebarComponent, LogoComponent, RouterModule]
})
export class RegistradoPedirCitaComponent {

    constructor(private router: Router) {}

goToEspecialidad() {
    this.router.navigate(["registrado-cita-especialidad"]);
}
goToClinicas() {
    this.router.navigate(["registrado-cita-clinicas"]);
}
goToProfesionales() {
    this.router.navigate(["registrado-cita-profesionales"]);
}

}
