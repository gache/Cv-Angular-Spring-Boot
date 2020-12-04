import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importation de la route
import { AppRoutingModule } from './app-routing.module';

// Importation des modules
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PropoMoiComponent } from './components/propo-moi/propo-moi.component';
import { DetailExperienceComponent } from './components/detail-experience/detail-experience.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ReseauxComponent } from './components/reseaux/reseaux.component';
import { LangageInforComponent } from './components/langage-infor/langage-infor.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { DiplomesComponent } from './components/diplomes/diplomes.component';

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
    DiplomesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgsRevealModule,
    AppRoutingModule
  ],
  providers: [
    NgsRevealConfig,
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
