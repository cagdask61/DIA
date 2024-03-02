import { isPlatformBrowser } from '@angular/common';
import { Component, NgZone, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import TypeIt from 'typeit';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    RouterLinkWithHref
  ]
})
export default class HomeComponent implements OnInit {

  private readonly platformID = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      this.ngZone.runOutsideAngular(() => {
        new TypeIt('#job', { loop: true }).type(`"Tasarımcı"`).pause(3000).delete().pause(2000).type(`"Web Geliştirici"`).pause(3000).go();
      });
    }
  }

}