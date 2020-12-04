import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../services/experiences.service';
import { ExperienceInterface } from '../../entities/experience';

@Component( {
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
} )
export class ExperiencesComponent implements OnInit {

  listExperience: Array<ExperienceInterface>;

  constructor( private experienceService: ExperiencesService ) { }

  ngOnInit (): void {
    this.experienceService.getAllExperience()
      .subscribe( resp => {
        this.listExperience = resp;
        console.log( this.listExperience );
      } );

  }

}
