import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ThemeModeDirective } from '../../shared/theme-mode.directive';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    ThemeModeDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
