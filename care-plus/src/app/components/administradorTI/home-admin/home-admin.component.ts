import { Component } from '@angular/core';
import { SidebarAdminComponent } from "../sidebar-admin/sidebar-admin.component";

@Component({
    selector: 'app-home-admin',
    standalone: true,
    templateUrl: './home-admin.component.html',
    styleUrl: './home-admin.component.css',
    imports: [SidebarAdminComponent]
})
export class HomeAdminComponent {

}
