import { Time } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  name : string = "";
  email: string = "";
  mobile : number = 0;
  date : Date = new Date();
  time : number = 0;
  appointment :string = "";
  money : number = 1000;
  
  bdisplay : boolean = false;

  displayAppointmentReciept(){
    this.bdisplay = true;
  }
}
