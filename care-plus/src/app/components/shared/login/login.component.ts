import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import anime from 'animejs';
import { LogoComponent } from '../logo/logo.component';
import { FormsModule } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';//npm install jwt-decode
import { UserService } from '../../../services/user.service';
import { Usuario } from '../../../entities/usuario';
import { log } from 'console';
 
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [LogoComponent,FormsModule,
      RouterModule
  ]
})
export class LoginComponent implements OnInit {
 
  user: Usuario = new Usuario()
 
 
  constructor(private userService: UserService,  private router: Router) { }
 
 
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
     let current: anime.AnimeInstance | null = null;
 
     document.querySelector('#email')?.addEventListener('focus', function (e: Event) {
       if (current) current.pause();
       current = anime({
         targets: 'path',
         strokeDashoffset: {
           value: 0,
           duration: 700,
           easing: 'easeOutQuart'
         },
         strokeDasharray: {
           value: '240 1386',
           duration: 700,
           easing: 'easeOutQuart'
         }
       });
     });
 
     document.querySelector('#password')?.addEventListener('focus', function (e: Event) {
       if (current) current.pause();
      current = anime({
         targets: 'path',
         strokeDashoffset: {
           value: -336,
           duration: 700,
           easing: 'easeOutQuart'
         },
         strokeDasharray: {
           value: '240 1386',
           duration: 700,
           easing: 'easeOutQuart'
         }
       });
     });
 
     document.querySelector('#submit')?.addEventListener('click', (e: Event) => {
       e.preventDefault(); // Evitar el comportamiento predeterminado del botón
       if (current) current.pause();
       current = anime({
         targets: 'path',
         strokeDashoffset: {
           value: -730,
           duration: 700,
           easing: 'easeOutQuart'
         },
         strokeDasharray: {
           value: '530 1386',
           duration: 700,
           easing: 'easeOutQuart'
         },
       
        });
      });
    }
    //Comprueba si el usuario ya esta autentificado (NO SE SI FUNCIONA COMO DEBERIA) :)
    if (this.userService.isAuthenticated()) {
      const role = JSON.parse(sessionStorage.getItem('role') || '[]');
      if (role.includes('ROLE_ADMIN')) {
        this.router.navigate(['admin-home']);
      } else if (role.includes('ROLE_DOCTOR')) {
        this.router.navigate(['doctor-home']);
      } else {
        this.router.navigate(['/home']);
      }
    }
   
  }
 
  onSubmit() {
    this.userService.login(this.user).subscribe(
      data => {
        sessionStorage.setItem('token', data.token);//Guarda token en el sessionStorage
        this.saveRoleAndRedirect(data.token); 
      },
      error => {
        console.error('Error during login:', error);
      }
    );
  }

  saveRoleAndRedirect(accessToken: string): void {
    try {
        const payload: any = jwtDecode(accessToken);//Desencripta el token y saca las authenties
        let authorities = [];
        const authoritiesString = JSON.stringify(payload.authorities);//lo pasa a string


        //Busca en la cadena String para ver si coincide con estos roles
        if (authoritiesString.includes('ROLE_ADMIN')) {
            authorities.push('ROLE_ADMIN');
        }
        if (authoritiesString.includes('ROLE_DOCTOR')) {
            authorities.push('ROLE_DOCTOR');
        }
        if (authoritiesString.includes('ROLE_PACIENTE')) {
            authorities.push('ROLE_PACIENTE');
        }

        sessionStorage.setItem('role', JSON.stringify(authorities));//Guarda el role aislado en el sessionStorage

        //Si el role coincide con estos parametros se redirecciona 
        if (authorities.includes('ROLE_ADMIN')) {
            this.router.navigate(['admin-home']);
        } else if (authorities.includes('ROLE_DOCTOR')) {
            this.router.navigate(['doctor-home']);
          } else if (authorities.includes('ROLE_PACIENTE')) {
            this.router.navigate(['registrado-home']);
        } else {
            this.router.navigate(['/home']);
        }
    } catch (error) {
        console.error('Error decoding token:', error);
    }
  }

 
   
 
 
}