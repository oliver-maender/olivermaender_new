import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-section',
  standalone: false,

  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss',
  animations: [
    trigger('divState', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(200px)'
        }),
        animate(1000)
      ])
    ]),
    trigger('textZoomOut', [
      transition('void => *', [
        style({
          transform: 'scale(1.5)'
        }),
        animate(1000)
      ])
    ])
  ]
})
export class FirstSectionComponent {

  hideOverflow = false;

  constructor() { }

  ngOnInit(): void {
  }

  animationStarted() {
    this.hideOverflow = true;
  }

  animationEnded() {
    this.hideOverflow = false;
  }

}
