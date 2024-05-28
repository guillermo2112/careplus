import { Component } from '@angular/core';
import { RegistradoProfileComponent } from "../registrado-profile/registrado-profile.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";

@Component({
    selector: 'app-home-paciente',
    standalone: true,
    templateUrl: './home-paciente.component.html',
    styleUrl: './home-paciente.component.css',
    imports: [RegistradoProfileComponent, RegistradoSidebarComponent]
})
export class HomePacienteComponent {

}
