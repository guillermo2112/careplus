import { Component } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";

@Component({
    selector: 'app-home-doctor',
    standalone: true,
    templateUrl: './home-doctor.component.html',
    styleUrl: './home-doctor.component.css',
    imports: [DoctorSidebarComponent]
})
export class HomeDoctorComponent {

}
