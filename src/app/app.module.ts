import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './pages/home-page/home-component.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { JobDetailsPgaeComponent } from './pages/job-details-pgae/job-details-pgae.component';
import { FormsModule } from '@angular/forms';
import { AdminComponentComponent } from './pages/admin-page/admin-component.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CardsComponent,
    FooterComponent,
    HomeComponentComponent,
    JobsPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    JobDetailsPgaeComponent,
    AdminComponentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
