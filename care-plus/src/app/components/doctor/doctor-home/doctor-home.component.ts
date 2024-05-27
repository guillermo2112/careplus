import { Component } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";

@Component({
    selector: 'app-doctor-home',
    standalone: true,
    templateUrl: './doctor-home.component.html',
    styleUrl: './doctor-home.component.css',
    imports: [DoctorSidebarComponent]
})
export class DoctorHomeComponent {

}
