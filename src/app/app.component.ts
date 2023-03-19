import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'ng-carousel-demo';
  

  //Carousels Images Paths
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../assets/bday1.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../assets/bday2.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../assets/bday3.jpg"}
  ];
  
  //Carousel movement time 
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  } 
}