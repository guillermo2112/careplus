import { Component } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-doctor-citas',
    standalone: true,
    templateUrl: './doctor-citas.component.html',
    styleUrl: './doctor-citas.component.css',
    imports: [DoctorSidebarComponent, HeaderComponent]
})
export class DoctorCitasComponent {

}
