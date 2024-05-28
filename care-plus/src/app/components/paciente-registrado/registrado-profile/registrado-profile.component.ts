import { Component } from '@angular/core';
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";

@Component({
    selector: 'app-registrado-profile',
    standalone: true,
    templateUrl: './registrado-profile.component.html',
    styleUrl: './registrado-profile.component.css',
    imports: [RegistradoSidebarComponent]
})
export class RegistradoProfileComponent {

}
