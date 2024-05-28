import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoComponent } from "../shared/logo/logo.component";

@Component({
    selector: 'app-paciente',
    standalone: true,
    templateUrl: './paciente.component.html',
    styleUrl: './paciente.component.css',
    imports: [LogoComponent]
})
export class PacienteComponent {
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
