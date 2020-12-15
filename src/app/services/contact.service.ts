import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactInterfacer } from '../entities/contact';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';

@Injectable( {
  providedIn: 'root'
} )
export class ContactService {

  constructor( private Http: HttpClient ) { }

  private url = "http://localhost:8080/api/contacts";


  public getAllMessage (): Observable<Array<ContactInterfacer>> {
    return this.Http.get<Array<ContactInterfacer>>( this.url );

  }

  public registerMessage ( contact: ContactInterfacer ) {
    return this.Http.post( `${this.url}/save`, contact )
  }

  // public getMessageId ( id: String ) {
  //   return this.Http.get( `${this.url}${id}.json` )
  // }

}
