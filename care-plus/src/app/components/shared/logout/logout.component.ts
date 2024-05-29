import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private userService: UserService, 
    private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');

    this.userService.logout();

    this.router.navigate(['/login']);
  }
}
