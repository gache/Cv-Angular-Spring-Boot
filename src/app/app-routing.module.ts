import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailExperienceComponent } from './components/detailExperience/detail-experience.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ProjetsAdminComponent } from './admin/projets-admin/projets-admin.component';
import { DiplomeAdminComponent } from './admin/diplome-admin/diplome-admin.component';
import { ExperiencesAdminComponent } from './admin/experiences-admin/experiences-admin.component';
import { LangagesAdminComponent } from './admin/langages-admin/langages-admin.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { format } from 'path';
import { CreateDiplomeComponent } from './admin/form/create-diplome/create-diplome.component';


const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homeAdmin', component: HomeAdminComponent },
  { path: 'projetsAdmin', component: ProjetsAdminComponent },
  { path: 'diplomesAdmin', component: DiplomeAdminComponent },
  { path: 'experiencesAdmin', component: ExperiencesAdminComponent },
  { path: 'langagesAdmin', component: LangagesAdminComponent },
  { path: 'detail/:id', component: DetailExperienceComponent },
  { path: 'createDiplome/form', component: CreateDiplomeComponent },
  { path: 'createDiplome/form/:id', component: CreateDiplomeComponent },
  { path: '', component: PagenotfoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule( {
  imports: [RouterModule.forRoot( ROUTES )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
