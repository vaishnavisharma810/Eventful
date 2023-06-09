import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "Navbar", component: NavbarComponent},
  {path: "About", component: AboutUsComponent},
  {path: "Contact", component: ContactUsComponent},
  {path: "BookAppointment", component: BookAppointmentComponent},
  {path: "Cart", component: CartComponent},
  {path: "Services", component: ServicesComponent},
  {path: "Login", component: LoginComponent},
  {path: "**", component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
