import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import anime from 'animejs';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [LogoComponent,
      RouterModule
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

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
          complete: () => {
            // Agregar un retraso de 1 segundo antes de navegar a la página 'navbar'
            setTimeout(() => {
              this.llamarnavbar();
            }, 1000);
          }
        });
      });
    }
  }

  llamarnavbar() {
    this.router.navigate(['/home']);
  }
}
