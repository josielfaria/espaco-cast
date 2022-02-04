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
import { CardProductComponent } from './components/card-product/card-product.component';
import { SectionContactComponent } from './pages/home/section-contact/section-contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInfosComponent } from './components/contact-infos/contact-infos.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/notification/notification.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './components/maps/maps.component';
import { TitleComponent } from './components/title/title.component';
import { AboutItemComponent } from './components/about-item/about-item.component';
import { SectionServicesComponent } from './pages/home/section-services/section-services.component';

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
    NotificationComponent,
    MapsComponent,
    TitleComponent,
    AboutItemComponent,
    SectionServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      // TODO: please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAfazUFr3fTKSw0ETRmvA0Iaqhwc5A7E_k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
