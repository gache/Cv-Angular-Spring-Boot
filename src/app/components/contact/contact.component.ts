import { Component, OnInit } from '@angular/core';
import { ContactInterfacer } from 'src/app/entities/contact';
import { ContactService } from '../../services/contact.service';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component( {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
} )
export class ContactComponent implements OnInit {


  constructor( private formBuilder: FormBuilder,
    private contactService: ContactService ) {

  }

  contactForm = new FormGroup( {
    nom: new FormControl( '', [Validators.required, Validators.minLength( 3 ), Validators.pattern( /^[a-zA-Z0-9]{2,150}/ )] ),

    prenom: new FormControl( '', [Validators.required, Validators.minLength( 3 ), Validators.pattern( /^[a-zA-Z0-9]{2,150}/ )] ),

    email: new FormControl( '', [Validators.required, Validators.pattern( /^[a-zA-Z0-9]{2,150}/ )] ),

    telephone: new FormControl( '', [Validators.required] ),

    sujet: new FormControl( '', [Validators.required, Validators.minLength( 3 )] ),

    message: new FormControl( '', [Validators.required, Validators.minLength( 5 )] ),
  } )



  ngOnInit (): void {

  }

  afficherValeur () {

    let contact: ContactInterfacer = {
      id: null,
      email: this.contactForm.get( 'email' ).value,
      nom: this.contactForm.get( 'nom' ).value,
      prenom: this.contactForm.get( 'prenom' ).value,
      telephone: this.contactForm.get( 'telephone' ).value,
      sujet: this.contactForm.get( 'sujet' ).value,
      message: this.contactForm.get( 'message' ).value
    }
    console.log( contact );

    this.contactService.registerMessage( contact ).subscribe( res => {

      console.log( res );
    } );

    this.contactForm.reset();


  }

  clearFormulaire () {
    this.contactForm.reset();
  }



}
