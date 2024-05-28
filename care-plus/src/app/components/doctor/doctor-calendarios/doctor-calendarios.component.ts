import { Component } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";

@Component({
    selector: 'app-doctor-calendarios',
    standalone: true,
    templateUrl: './doctor-calendarios.component.html',
    styleUrl: './doctor-calendarios.component.css',
    imports: [DoctorSidebarComponent]
})
export class DoctorCalendariosComponent {

}
