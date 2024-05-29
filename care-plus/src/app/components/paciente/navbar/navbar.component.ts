import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [LogoComponent, RouterModule]
})
export class NavbarComponent {

  constructor(private router: Router, public userService: UserService) {}

  ir_inicio_sesion() {
    this.router.navigate(["/inicio_sesion"]);
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

    // Redirección a Componente Libros
    this.router.navigate(['/']);
  }

  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarsExample07');

    if (navbarToggler && navbarCollapse) {
      if (navbarCollapse.classList.contains('show')) {
        (navbarToggler as HTMLElement).click();
      }
    }
  }
}
