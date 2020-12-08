import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component( {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
} )
export class ContactComponent implements OnInit {

  constructor( private formBuilder: FormBuilder ) {

  }

  contactForm = new FormGroup( {
    nom: new FormControl( '', [Validators.required, Validators.minLength( 3 ), Validators.pattern( /^[a-zA-Z0-9]{2,150}/ )] ),

    prenom: new FormControl( '', [Validators.required, Validators.minLength( 3 ), Validators.pattern( /^[a-zA-Z0-9]{2,150}/ )] ),

    email: new FormControl( '', [Validators.required, Validators.pattern( /^[a-zA-Z0-9]{2,150}/ )] ),

    sujet: new FormControl( '', [Validators.required, Validators.minLength( 3 )] ),

    message: new FormControl( '', [Validators.required, Validators.minLength( 5 )] ),
  } )



  ngOnInit (): void {

  }

  afficherValeur (): void {
    const valeurInput = this.contactForm.value;
    if ( this.contactForm.valid ) {
      console.log( valeurInput.nom );
      console.log( valeurInput.prenom );
      console.log( valeurInput.email );
      console.log( valeurInput.sujet );
      console.log( valeurInput.message );
    } else {
      console.log( "Error" );

    }

  }

  get title (): AbstractControl {
    return this.contactForm.get( 'title' );
  }


}
