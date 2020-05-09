import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WorksCardComponent } from './pages/work/works-card/works-card.component';
import { HeaderTestComponentComponent } from './header-test-component/header-test-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CapabilitiesComponent,
    WorkComponent,
    ContactUsComponent,
    WorksCardComponent,
   HeaderTestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
