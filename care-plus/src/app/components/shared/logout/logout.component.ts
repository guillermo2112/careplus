import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { navbarData } from '../../administradorTI/admin-sidebar/nav-data';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(private userService: UserService, 
    private router: Router) { }

  ngOnInit(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }


    
   
    //  ir_cerrar_sesion() {
    //   //let username: string = this.userService.user.username;
    //   this.userService.logout();
  
    //   Swal.fire({
    //     title: 'Cerrar sesión',
    //     //text: `${username}, has cerrado sesión con éxito`,
    //     text: `Has cerrado sesión con éxito`,
    //     icon: 'success',
    //     timer: 2000,
    //     showConfirmButton: false,
    //   });
  
    //   this.router.navigate(['/']);
    // }
}
