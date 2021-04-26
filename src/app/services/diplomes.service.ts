import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiplomeInterface } from '../entities/diplome';

@Injectable( {
  providedIn: 'root'
} )
export class DiplomesService {

  constructor( private Http: HttpClient ) { }

  private url = "http://localhost:8080/api/diplomes";

  public getAllDiplome (): Observable<DiplomeInterface[]> {
    return this.Http.get<DiplomeInterface[]>( this.url );
  }
}
