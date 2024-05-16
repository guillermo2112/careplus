import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import anime from 'animejs';
import { LogoComponent } from '../logo/logo.component';
import { UserService } from '../../user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../entities/user';
import { get } from 'http';

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

  form: any = {
    username: null,
    password: null
  };


  constructor(private userService: UserService,  private router: Router) { }


  ngOnInit(): void {
    //if (typeof document !== 'undefined') {
    //  let current: anime.AnimeInstance | null = null;

    //  document.querySelector('#email')?.addEventListener('focus', function (e: Event) {
    //    if (current) current.pause();
    //    current = anime({
    //      targets: 'path',
    //      strokeDashoffset: {
    //        value: 0,
    //        duration: 700,
    //        easing: 'easeOutQuart'
    //      },
    //      strokeDasharray: {
    //        value: '240 1386',
    //        duration: 700,
    //        easing: 'easeOutQuart'
    //      }
   //     });
   //   });

    //  document.querySelector('#password')?.addEventListener('focus', function (e: Event) {
     //   if (current) current.pause();
    //   current = anime({
     //     targets: 'path',
     //     strokeDashoffset: {
     //       value: -336,
      //      duration: 700,
    //        easing: 'easeOutQuart'
   //       },
   //       strokeDasharray: {
    //        value: '240 1386',
    //        duration: 700,
    //        easing: 'easeOutQuart'
    //      }
    //    });
    //  });

    //  document.querySelector('#submit')?.addEventListener('click', (e: Event) => {
    //    e.preventDefault(); // Evitar el comportamiento predeterminado del botón
    //    if (current) current.pause();
    //    current = anime({
    //      targets: 'path',
    //      strokeDashoffset: {
    //        value: -730,
     //       duration: 700,
    //        easing: 'easeOutQuart'
    //      },
    //      strokeDasharray: {
    //        value: '530 1386',
    //        duration: 700,
    //        easing: 'easeOutQuart'
    //      },
   //     complete: () => {
    //         //Agregar un retraso de 1 segundo antes de navegar a la página 'navbar'
     //      setTimeout(() => {
      //       this.router.navigate(['/home']);
      //      }, 1000);
       //   }
        //});
      //});
    //}
    
  }

  onSubmit() {
    console.log(this.form);
    const user: User = { username: this.form.username, password: this.form.password }; 
    this.userService.login(user).subscribe(
      data => {
        sessionStorage.setItem('token', data.token);//el token
        if (this.userService.getAuthorities() == 'ROLE_ADMIN') {//el role del usuario
          this.router.navigate(['/doctor']);
        } else {
        this.router.navigate(['/doctor']);
        }
        
        
      });

  }

    
  

}

