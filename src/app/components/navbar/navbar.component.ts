import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserSessionDto } from '../../pages/auth/login/userSessionDto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  change = '';
  logo = 'https://cdn-icons-png.flaticon.com/512/8199/8199892.png'
  // isAuthenticate!: Observable<boolean>
  isAuthenticate: Observable<UserSessionDto | null> = new Observable();

  authService = inject(AuthService)
  router = inject(Router)

  ngOnInit(): void {
    this.isAuthenticate = this.authService.isAuthenticate$

  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
