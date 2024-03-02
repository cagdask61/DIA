import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, OnInit, PLATFORM_ID, ViewChild, inject } from '@angular/core';

import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import TypeIt from 'typeit';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [

  ],
  styles: `
  :host {
    display: block;
    height: 100%;
  }
  `
})
export default class HomeComponent implements OnInit {

  private readonly platformID = inject(PLATFORM_ID);

  @ViewChild('job', { static: true }) private readonly jobEl!: ElementRef<HTMLDivElement>;

  constructor() {
    gsap.registerPlugin(TextPlugin);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      new TypeIt('#job', { loop: true }).pause(1000).type('Tasarımcı').pause(3000).delete().pause(2000).type('Front End Developer').go();
    }
  }

}