import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  opened = false;

  constructor() { }

  ngOnInit(): void { }

  toggleSidenav() {
    if (this.opened == false) {
      this.opened = true;
    }
    else {
      this.opened = false;
    }
  }

}
