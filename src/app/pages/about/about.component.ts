import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [

  ],
  styles: `
  :host {
    display: block;
    height: 100%;
  }
  `
})
export default class AboutComponent {

}
