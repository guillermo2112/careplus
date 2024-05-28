import { Component } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";

@Component({
    selector: 'app-doctor-citas',
    standalone: true,
    templateUrl: './doctor-citas.component.html',
    styleUrl: './doctor-citas.component.css',
    imports: [DoctorSidebarComponent]
})
export class DoctorCitasComponent {

}
