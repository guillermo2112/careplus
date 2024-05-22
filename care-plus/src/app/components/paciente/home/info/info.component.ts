import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../../../logo/logo.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [LogoComponent,
    RouterModule
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  constructor(private router:Router){}

  irAProfesionales(){
    this.router.navigate(["/doctor"])
  }

}
