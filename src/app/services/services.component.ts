import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  search : string = "";


  // EVENT BINDING WHEN YOU SEARCH YOUR CITY
  searchCity(){
    alert("Woho!!! We are there in " +this.search);
  }
}
