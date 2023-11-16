import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((_) => _.HomeModule),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
