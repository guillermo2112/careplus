import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import anime from 'animejs';
import { LogoComponent } from '../logo/logo.component';
import { UserService } from '../../user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../entities/user';

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
    console.log('hdabbabroi');
   
  }

  onSubmit() {
    console.log(this.form);
    const user: User = { username: this.form.username, password: this.form.password }; 
    console.log(user);
    this.userService.login(user).subscribe(
      data => {
        console.log(data);
        sessionStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
        
      });
      
    }
  
  

 
}
