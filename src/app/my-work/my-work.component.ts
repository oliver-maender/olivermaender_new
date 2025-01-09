import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  standalone: false,

  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  projects = [
    {
      "name": 'Sports Home (Angular)',
      "description": $localize`:@@myWorkSportsHomeDescription:This is my favourite project. You can <b>see and also change the match results of different soccer leagues</b> I implemented. If you change or add the results for matches, the standings will <b>dynamically change</b>, so you will always be up-to-date with your favourite leagues.`,
      "techniques": 'HTML, SCSS, TypeScript, Angular, Firebase Authentication + Database, Rest API, Bootstrap, Git',
      "image": 'assets/img/sports-home-startpage-picture.png',
      "js-doc": 'https://www.olivermaender.de/sports-home/documentation/',
      "github": 'https://github.com/oliver-maender/sports-home',
      "product-link": 'https://www.olivermaender.de/sports-home/'
    },
    {
      "name": 'My Homepage (Angular)',
      "description": $localize`:@@myWorkMyHomepageDescription:This is the page you are currently viewing. It is about me and my work.`,
      "techniques": 'HTML, SCSS, TypeScript, Angular, Material Design, Backend Communication for sending contact formular, Git',
      "image": 'assets/img/olivermaender-startpage.png',
      "js-doc": 'https://www.olivermaender.de/documentation/',
      "github": 'https://github.com/oliver-maender/olivermaender_new',
      "product-link": 'https://www.olivermaender.de/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openJSDocLink(project: number) {
    window.open(this.projects[project]['js-doc'], '_blank');
  }

  openGithubLink(project: number) {
    window.open(this.projects[project]['github'], '_blank');
  }

  openProductLink(project: number) {
    window.open(this.projects[project]['product-link'], '_blank');
  }

}
