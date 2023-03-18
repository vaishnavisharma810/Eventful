import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: "", component: ServicesComponent},
  {path: "About", component: AboutUsComponent},
  {path: "Contact", component: ContactUsComponent},
  {path: "BookAppointment", component: BookAppointmentComponent},
  {path: "Cart", component: CartComponent},
  {path: "Services", component: ServicesComponent},
  {path: "**", component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
