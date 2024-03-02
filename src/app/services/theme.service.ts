import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';

export enum Theme {
  Dark = "dark",
  Light = "light"
}

const STORAGE_NAME = "theme";

@Injectable({
  providedIn: 'root'
})
export default class ThemeService {

  private readonly platformID = inject(PLATFORM_ID);
  private readonly _document = inject(DOCUMENT);
  private readonly _window = <Window>this._document.defaultView;

  readonly theme = signal<Theme>(isPlatformBrowser(this.platformID) ? localStorage.getItem(STORAGE_NAME) as Theme : Theme.Light);

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformID)) return;

      const currentTheme = this.theme();
      if (currentTheme && currentTheme === Theme.Dark) {
        localStorage.setItem(STORAGE_NAME, 'dark');
        this._document.documentElement.classList.add('dark');
      }
      else {
        localStorage.setItem(STORAGE_NAME, 'light');
        this._document.documentElement.classList.remove('dark');
      }
    });
  }

  toggle() {
    this.theme.update((state) => state === Theme.Dark ? Theme.Light : Theme.Dark);
  }


}