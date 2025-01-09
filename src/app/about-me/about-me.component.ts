import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: false,

  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  skills = [
    {
      "name": 'HTML',
      "amount": '90'
    },
    {
      "name": 'CSS, SCSS',
      "amount": '90'
    },
    {
      "name": 'Bootstrap',
      "amount": '80'
    },
    {
      "name": 'JavaScript',
      "amount": '80'
    },
    {
      "name": 'TypeScript/Angular',
      "amount": '60'
    },
    {
      "name": 'Material Design',
      "amount": '60'
    },
    {
      "name": 'SCRUM/Kanban',
      "amount": '60'
    },
    {
      "name": 'Rest APIs',
      "amount": '50'
    },
    {
      "name": 'Google Firebase',
      "amount": '40'
    },
    {
      "name": 'Git',
      "amount": '40'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
