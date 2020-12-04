import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LangageInterface } from '../entities/langage';

@Injectable( {
  providedIn: 'root'
} )
export class LangageInfoService {

  constructor( private Http: HttpClient ) { }

  private url: "http://localhost:8080/langages";

  public getAllLangage (): Observable<Array<LangageInterface>> {
    return this.Http.get<Array<LangageInterface>>( this.url );
  }

}
