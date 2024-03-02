import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import NavigationComponent from './components/navigation/navigation.component';
import FooterComponent from './components/footer/footer.component';
import ThemeService from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavigationComponent,
    FooterComponent
  ],
})
export default class AppComponent {

  readonly themeService = inject(ThemeService);

  toggleTheme() {

  }
}