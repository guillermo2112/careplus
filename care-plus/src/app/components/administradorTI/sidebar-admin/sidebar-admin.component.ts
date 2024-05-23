import { Component } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";

@Component({
    selector: 'app-sidebar-admin',
    standalone: true,
    templateUrl: './sidebar-admin.component.html',
    styleUrl: './sidebar-admin.component.css',
    imports: [LogoComponent]
})
export class SidebarAdminComponent {

}
