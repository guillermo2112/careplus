import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { Router } from '@angular/router';


@Component({
    selector: 'app-registrado-cita-clinicas',
    standalone: true,
    templateUrl: './registrado-cita-clinicas.component.html',
    styleUrl: './registrado-cita-clinicas.component.css',
    imports: [HeaderComponent, RegistradoSidebarComponent]
})
export class RegistradoCitaClinicasComponent {


constructor(private router: Router) {}

goBack() {
    this.router.navigate(["registrado-pedir-cita"]);
}
}
