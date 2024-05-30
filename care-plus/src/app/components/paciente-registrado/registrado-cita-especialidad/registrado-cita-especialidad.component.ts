import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";

@Component({
    selector: 'app-registrado-cita-especialidad',
    standalone: true,
    templateUrl: './registrado-cita-especialidad.component.html',
    styleUrl: './registrado-cita-especialidad.component.css',
    imports: [HeaderComponent, RegistradoSidebarComponent]
})
export class RegistradoCitaEspecialidadComponent {

}
