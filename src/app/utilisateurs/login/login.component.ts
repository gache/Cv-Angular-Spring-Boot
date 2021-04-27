import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/entities/utilisateur';
import swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {

  titre: string = "s'identifier";
  utilisateur: Utilisateur;

  constructor( private auth: AuthService,
    private router: Router ) {
    this.utilisateur = new Utilisateur();
  }

  ngOnInit (): void {
  }

  public login (): void {
    if ( this.utilisateur.username == null || this.utilisateur.password == null ) {
      swal.fire( 'Error Login', 'Username ou password vides!', 'error' );
      return;
    }

  }
}