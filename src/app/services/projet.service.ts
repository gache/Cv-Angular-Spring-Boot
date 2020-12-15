import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjetInterface } from '../entities/projet';

@Injectable( {
  providedIn: 'root'
} )
export class ProjetService {

  constructor( private Http: HttpClient ) { }

  private url = "http://localhost:8080/api/projets";


  public getAllProjets (): Observable<Array<ProjetInterface>> {
    return this.Http.get<Array<ProjetInterface>>( this.url );
  }




}
