import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";

@Component({
    selector: 'app-admin-indicators',
    standalone: true,
    templateUrl: './admin-indicators.component.html',
    styleUrl: './admin-indicators.component.css',
    imports: [HeaderComponent, AdminSidebarComponent]
})
export class AdminIndicatorsComponent {

}
