import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  bWhatsApp : boolean = false;
  bMail : boolean = false;

  displayWhatsApp(){
    this.bWhatsApp = true;
    this.bMail = false;
  }

  displayMail(){
    this.bMail = true;
    this.bWhatsApp = false;
  }

  callButton(){
    confirm("Ready to make a call");
  }
}
