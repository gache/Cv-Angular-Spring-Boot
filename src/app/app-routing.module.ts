import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailExperienceComponent } from './components/detailExperience/detail-experience.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailExperienceComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule( {
  imports: [RouterModule.forRoot( ROUTES )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
