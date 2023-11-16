import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngThemeMode]'
})
export class ThemeModeDirective {

  @Input('ngThemeMode') set theme(value: boolean) {
    this.setTheme(value);
  }

  constructor(private el: ElementRef, private render: Renderer2) {
  }
  private setTheme(isDark: boolean) {
    const classTheme = isDark ? 'dark' : 'light'
    this.render.setAttribute(this.el.nativeElement, 'class', classTheme)
  }

}
