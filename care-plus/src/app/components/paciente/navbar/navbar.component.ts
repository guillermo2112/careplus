import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [LogoComponent, RouterModule]
})
export class NavbarComponent {

  constructor(private router: Router) {}

  ir_inicio_sesion() {
    this.router.navigate(["/inicio_sesion"]);
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
