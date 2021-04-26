import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ExperienceInterface } from '../entities/experience';

@Injectable( {
  providedIn: 'root'
} )
export class ExperiencesService {

  constructor( private Http: HttpClient ) { }

  private url = "http://localhost:8080/api/experiences";

  public getAllExperience (): Observable<Array<ExperienceInterface>> {
    return this.Http.get<Array<ExperienceInterface>>( this.url );
  }
}
