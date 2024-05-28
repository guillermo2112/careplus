import { Component } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";

@Component({
    selector: 'app-doctor-profile',
    standalone: true,
    templateUrl: './doctor-profile.component.html',
    styleUrl: './doctor-profile.component.css',
    imports: [DoctorSidebarComponent]
})
export class DoctorProfileComponent {

}
