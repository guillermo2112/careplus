import { Component, Output,EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { navbarData } from './nav-data';
import { LogoutComponent } from "../../shared/logout/logout.component";
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from "../../shared/header/header.component";
 
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
 
@Component({
    selector: 'app-admin-sidebar',
    standalone: true,
    templateUrl: './admin-sidebar.component.html',
    styleUrl: './admin-sidebar.component.css',
    imports: [RouterModule, CommonModule, LogoutComponent, HeaderComponent]
})
export class AdminSidebarComponent {

  constructor(private router: Router, public userService: UserService) {}
 
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

   ir_cerrar_sesion() {
    //let username: string = this.userService.user.username;
    this.userService.logout();

    Swal.fire({
      title: 'Cerrar sesión',
      //text: `${username}, has cerrado sesión con éxito`,
      text: `Has cerrado sesión con éxito`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    });

    this.router.navigate(['/']);
  }
 
}
 