import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserSessionDto } from '../auth/login/userSessionDto';
import { AuthService } from '../../services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  user?: UserSessionDto
  unsub = new Subject<void>()
  theme = true
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticate$
      .pipe(takeUntil(this.unsub))
      .subscribe(userData => {
        if (userData) {
          this.user = userData
        }
      })
  }
  changeTheme(event: boolean) {
    this.theme = event
  }

  ngOnDestroy(): void {
    this.unsub.next()
    this.unsub.complete()

  }
}
