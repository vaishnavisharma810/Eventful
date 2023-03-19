import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  // VARIABLES

  bWhatsApp: boolean = false;
  bMail: boolean = false;

  //WHEN WHATSAPP BUTTON IS CLICKED
  displayWhatsApp() {
    this.bWhatsApp = true;
    this.bMail = false;
  }

  //WHEN MAIL BUTTON IS CLICKED
  displayMail() {
    this.bMail = true;
    this.bWhatsApp = false;
  }

  //EVENT BINDING WHEN CALL BUTTON IS CLICKED
  callButton() {
    confirm("Ready to make a call");
  }
}
