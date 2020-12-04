import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiplomeInterface } from '../entities/diplome';

@Injectable( {
  providedIn: 'root'
} )
export class DiplomesService {

  constructor( private Http: HttpClient ) { }

  private url = "http://localhost:8080/diplomes";

  public getAllDiplome (): Observable<Array<DiplomeInterface>> {
    return this.Http.get<Array<DiplomeInterface>>( this.url );
  }
}
