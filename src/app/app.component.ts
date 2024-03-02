import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import ThemeService from './services/theme.service';
import HomeComponent from './pages/home/home.component';
import AboutComponent from './pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutComponent
  ],
  styles: `
  :host{
    display: block;
    height: 100%;
  }
  `
})
export default class AppComponent {

  private readonly themeService = inject(ThemeService);

  readonly currentTheme = this.themeService.theme.asReadonly();

  toggleTheme() {
    this.themeService.toggle();
  }
}