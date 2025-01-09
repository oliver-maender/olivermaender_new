import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-start-page',
  standalone: false,

  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 800) {
      this.noArrowUp = false;
    } else {
      this.noArrowUp = true;
    }
  }

  noArrowUp = true;

  constructor() { }

  ngOnInit(): void {
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

}
