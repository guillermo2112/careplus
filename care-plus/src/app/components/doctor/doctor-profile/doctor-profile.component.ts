import { Component } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-doctor-profile',
    standalone: true,
    templateUrl: './doctor-profile.component.html',
    styleUrl: './doctor-profile.component.css',
    imports: [DoctorSidebarComponent,
        RouterModule, HeaderComponent]
})
export class DoctorProfileComponent {

    constructor(private router: Router) { }


    editarFoto(){
        this.router.navigate(['/ima']);
    }
}
