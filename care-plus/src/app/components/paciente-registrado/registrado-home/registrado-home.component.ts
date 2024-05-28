import { Component } from '@angular/core';
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { RegistradoProfileComponent } from "../registrado-profile/registrado-profile.component";

@Component({
    selector: 'app-registrado-home',
    standalone: true,
    templateUrl: './registrado-home.component.html',
    styleUrl: './registrado-home.component.css',
    imports: [RegistradoSidebarComponent, RegistradoProfileComponent]
})
export class RegistradoHomeComponent {

}
