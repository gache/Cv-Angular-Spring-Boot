import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../entities/utilisateur';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {


  constructor( private http: HttpClient ) { }

  public login ( utilisateur: Utilisateur ): Observable<any> {
    const Url = 'http://localhost:8080/oauth/token';

    const acces = btoa( 'erickcv' + ':' + '12345' );
    const httpHeaders = new HttpHeaders( {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + acces
    } );

    let params = new URLSearchParams();
    params.set( 'grant_type', 'password' );
    params.set( 'username', utilisateur.username );
    params.set( 'password', utilisateur.password );
    console.log( params.toString() );
    return this.http.post<any>( Url, params.toString(), { headers: httpHeaders } );
  }




}
