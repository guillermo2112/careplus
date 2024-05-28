import { Component, Output,EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { navbarData } from './nav-data';
 
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
 
@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
 
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed=true;
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
 