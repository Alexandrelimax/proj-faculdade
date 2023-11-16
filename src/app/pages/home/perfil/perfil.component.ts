import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserSessionDto } from '../../auth/login/userSessionDto';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  @Input() user?: UserSessionDto
  @Output() onMode = new EventEmitter()
  @Input() themeMode = false




  buttonTheme() {
    this.themeMode = !this.themeMode
    this.onMode.emit(this.themeMode)
  }
}
