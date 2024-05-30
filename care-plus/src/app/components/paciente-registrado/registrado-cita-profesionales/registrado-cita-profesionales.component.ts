import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";

@Component({
    selector: 'app-registrado-cita-profesionales',
    standalone: true,
    templateUrl: './registrado-cita-profesionales.component.html',
    styleUrl: './registrado-cita-profesionales.component.css',
    imports: [HeaderComponent, RegistradoSidebarComponent]
})
export class RegistradoCitaProfesionalesComponent {

}
