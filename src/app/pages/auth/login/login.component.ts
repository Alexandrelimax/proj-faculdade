import { Component, OnDestroy, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../../../services/login.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  imgLogo = '../../../assets/images/FAQs-amico 1.png';
  messageError = '';

  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  loginService = inject(LoginService);
  router = inject(Router);

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  private unsub = new Subject<void>();

  onSubmit() {
    const email = this.loginForm.controls.login.value!;
    const senha = this.loginForm.controls.password.value!;

    this.loginService
      .login({ email, senha })
      .pipe(takeUntil(this.unsub))
      .subscribe({
        next: (user) => {
          if (user) {
            this.authService.saveToken(user)
            this.router.navigate(['/home'])
          }
          this.messageError = 'Este usuario não existe'
        },
        error: () => this.messageError = 'Problemas no servidor, tente mais tarde',
      });
  }

  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }
}
