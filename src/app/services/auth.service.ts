import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../pages/auth/login/IUser';
import { UserSessionDto } from '../pages/auth/login/userSessionDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private userAuthenticate = new BehaviorSubject<boolean>(false);
  private userAuthenticate = new BehaviorSubject<UserSessionDto | null>(null);
  isAuthenticate$ = this.userAuthenticate.asObservable()

  constructor() { }

  saveToken(user: IUser): void {

    localStorage.setItem('token', user.token)

    this.userAuthenticate.next(new UserSessionDto(user))

  }

  logout(): void {
    localStorage.removeItem('token')
    this.userAuthenticate.next(null)
  }

}
