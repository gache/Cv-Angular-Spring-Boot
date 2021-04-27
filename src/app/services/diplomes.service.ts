import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDiplome, Diplome } from '../entities/diplome';

@Injectable( {
  providedIn: 'root'
} )
export class DiplomesService {

  constructor( private Http: HttpClient ) { }

  private url = "http://localhost:8080/api/diplomes";

  private httpHeaders = new HttpHeaders( { 'Content-Type': 'application/json' } )

  // methode pour avoir la liste de diplome
  public getAllDiplome (): Observable<IDiplome[]> {
    return this.Http.get<IDiplome[]>( this.url );
  }


  // methode pour créer un diplome
  public create ( diplome: Diplome ): Observable<Diplome> {
    return this.Http.post<Diplome>( this.url, diplome, { headers: this.httpHeaders } );
  }

  // methode pour avoir un dîplome avec un id 

  public getDiplome ( id ): Observable<Diplome> {
    return this.Http.get<Diplome>( `${this.url}/${id}` );
  }


  public update ( diplome: Diplome ): Observable<Diplome> {
    return this.Http.put<Diplome>( `${this.url}/${diplome.id}`, diplome, { headers: this.httpHeaders } );
  }



}
