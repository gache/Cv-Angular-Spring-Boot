import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactInterfacer } from '../entities/contact';

@Injectable( {
  providedIn: 'root'
} )
export class ContactService {

  constructor( private Http: HttpClient ) { }

  private url = "http://localhost:8080/contacts";

  public getAllMessage (): Observable<Array<ContactInterfacer>> {
    return this.Http.get<Array<ContactInterfacer>>( this.url );
  }

}
