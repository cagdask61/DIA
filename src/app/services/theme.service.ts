import { DOCUMENT } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export enum Theme {
  Dark = "dark",
  Light = "light"
}

@Injectable({
  providedIn: 'root'
})
export default class ThemeService {

  private readonly platformID = inject(PLATFORM_ID);
  private readonly _document = inject(DOCUMENT);

  readonly theme = signal<Theme>(Theme.Dark);



}