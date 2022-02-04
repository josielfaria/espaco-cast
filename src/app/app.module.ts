import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionMainComponent } from './pages/home/section-main/section-main.component';
import { SectionAboutComponent } from './pages/home/section-about/section-about.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonNavComponent } from './components/button-nav/button-nav.component';
import { CardProductComponent } from './card-product/card-product.component';
import { SectionContactComponent } from './pages/home/section-contact/section-contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInfosComponent } from './components/contact-infos/contact-infos.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SectionMainComponent,
    SectionAboutComponent,
    ButtonComponent,
    ButtonNavComponent,
    CardProductComponent,
    SectionContactComponent,
    ContactFormComponent,
    ContactInfosComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
