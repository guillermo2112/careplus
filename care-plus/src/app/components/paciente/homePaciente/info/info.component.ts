import { Component } from '@angular/core';
import { LogoComponent } from "../../../logo/logo.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-infopaciente',
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
