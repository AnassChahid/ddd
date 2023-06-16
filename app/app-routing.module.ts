import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TenderComponent } from './tender/tender.component';
import { PartenershipComponent } from './partenership/partenership.component';
import { LoginComponent } from './login/login.component';
import { guardUserGuard } from './authGuard/guard-user.guard';
import { noguardUserGuard } from './authGuard/noguard-user.guard';

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact", component: ContactComponent },
  { path: "tender", component: TenderComponent, canActivate: [guardUserGuard] },
  { path: "partenership", component: PartenershipComponent },
  { path: "login", component: LoginComponent, canActivate: [noguardUserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
