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
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { DiplomeAdminComponent } from './admin/diplome-admin/diplome-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ProjetsAdminComponent } from './admin/projets-admin/projets-admin.component';
import { LangagesAdminComponent } from './admin/langages-admin/langages-admin.component';
import { ExperiencesAdminComponent } from './admin/experiences-admin/experiences-admin.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';



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
    NavbarAdminComponent,
    DiplomeAdminComponent,
    HomeAdminComponent,
    ProjetsAdminComponent,
    LangagesAdminComponent,
    ExperiencesAdminComponent,
    PagenotfoundComponent,
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
