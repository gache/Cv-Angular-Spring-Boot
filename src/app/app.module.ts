import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// imporation pour travailler avec le formulaire
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Importation pour faire petitions Http
import { HttpClientModule } from '@angular/common/http';
// Importation de la route
import { AppRoutingModule } from './app-routing.module';

import { NgsRevealModule } from 'ngx-scrollreveal';
import { NgsRevealConfig } from 'ngx-scrollreveal';

// Importation des Composannts
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PropoMoiComponent } from './components/propo-moi/propo-moi.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ReseauxComponent } from './components/reseaux/reseaux.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { DiplomesComponent } from './components/diplomes/diplomes.component';
import { ContactComponent } from './components/contact/contact.component';
import { LangageInforComponent } from './components/langage-infor/langage-infor.component';
import { DetailExperienceComponent } from './components/detailExperience/detail-experience.component';



@NgModule( {
  declarations: [
    AppComponent,
    NavBarComponent,
    ExperiencesComponent,
    FooterComponent,
    HomeComponent,
    DetailExperienceComponent,
    PropoMoiComponent,
    AccueilComponent,
    ReseauxComponent,
    LangageInforComponent,
    ProjetsComponent,
    DiplomesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgsRevealModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    NgsRevealConfig,
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
