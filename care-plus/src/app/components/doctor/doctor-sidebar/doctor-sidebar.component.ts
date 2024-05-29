import { Component, Output,EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { navbarData } from './doctor-sidebar-data';
import { LogoutComponent } from "../../shared/logout/logout.component";
 
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
 
@Component({
    selector: 'app-doctor-sidebar',
    standalone: true,
    templateUrl: './doctor-sidebar.component.html',
    styleUrl: './doctor-sidebar.component.css',
    imports: [RouterModule, CommonModule, LogoutComponent]
})
export class DoctorSidebarComponent {
 
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed=false;
  screenWidth=0;
  navData=navbarData;
 
   toggleCollapse(){
    this.collapsed= !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth})
   }
 
   closeSidenav(){
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth})
   }
}
 