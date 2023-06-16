import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialsComponent } from './testimonials-component/testimonials-component.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerCarouselComponentComponent } from './banner-carousel-component/banner-carousel-component.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TenderComponent } from './tender/tender.component';
import { PartenershipComponent } from './partenership/partenership.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TestimonialsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerCarouselComponentComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TenderComponent,
    PartenershipComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

