import { Component, OnInit } from '@angular/core';
import {prefabAnimations} from "../../../directives/init-animation.directive";
import {ICarouselElement} from "../../../interfaces/ICarouselElement";

@Component({
  selector: 'app-projects-carousel',
  templateUrl: './projects-carousel.component.html',
  styleUrls: ['./projects-carousel.component.css']
})
export class ProjectsCarouselComponent implements OnInit {

  animations = prefabAnimations;
  elements: ICarouselElement[] = [
    {
      title: 'Manga Dot',
      description: 'Manga dot allows you to browse and read comics/manga scrapped from the internet. ' +
        'User is also able to fill scrapping form to ' +
        'add new manga to website backend database at realtime.',
      link: 'https://huszan.github.io/manga-dot/',
      pictureUrl: 'assets/pictures/projects/manga-dot-capture.PNG'
    },
    {
      title: 'Parallax effect',
      description: 'On this site you can play around with cool parallax effect and listen to music with custom player',
      link: 'https://huszan.github.io/moving-league-bg/',
      pictureUrl: 'assets/pictures/projects/parallax-capture.PNG'
    },
    {
      title: 'Particle effect',
      description: 'On this site I have created awesome custom particle effect system',
      link: 'https://huszan.github.io/particle-effect/',
      pictureUrl: 'assets/pictures/projects/particle-capture.PNG'
    },
    {
      description: 'For more visit my github profile!',
      link: 'https://github.com/Huszan',
      pictureUrl: 'https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
