import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IDiplome, Diplome } from '../entities/diplome';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class DiplomesService {

  constructor( private Http: HttpClient, private router: Router ) { }

  private url = "http://localhost:8080/api/diplomes";

  private httpHeaders = new HttpHeaders( { 'Content-Type': 'application/json' } )

  // methode pour avoir la liste de diplome
  public getAllDiplome (): Observable<IDiplome[]> {
    return this.Http.get<IDiplome[]>( this.url );
  }


  // methode pour créer un diplome
  public create ( diplome: Diplome ): Observable<Diplome> {
    return this.Http.post<Diplome>( this.url, diplome ).pipe(
      map( ( response: any ) => response.diplome as Diplome ),
      catchError( e => {
        if ( e.status == 400 ) {
          return throwError( e );
        }
        if ( e.errors.message ) {
          console.error( e.errors.message );
        }
        return throwError( e );
      } ) );
  }

  // methode pour avoir un dîplome avec un id

  public getDiplome ( id ): Observable<Diplome> {
    return this.Http.get<Diplome>( `${this.url}/${id}` ).pipe(
      catchError( e => {
        if ( e.status != 401 && e.error.message ) {
          this.router.navigate( ['/diplomesAdmin'] );
        }
        return throwError( e );
      } ) );
  }


  public update ( diplome: Diplome ): Observable<Diplome> {
    return this.Http.put<Diplome>( `${this.url}/${diplome.id}`, diplome ).pipe(
      catchError( e => {
        if ( e.status == 400 ) {
          return throwError( e );
        }
        if ( e.errors.message ) {
          console.error( e.errors.message );
        }
        return throwError( e );
      } )
    );
  }



}
