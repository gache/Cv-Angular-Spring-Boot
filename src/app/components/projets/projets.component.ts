import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet.service';
import { ProjetInterface } from '../../entities/projet';

@Component( {
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
} )
export class ProjetsComponent implements OnInit {

  listProjet: Array<ProjetInterface>;

  constructor( private projetService: ProjetService ) { }

  ngOnInit (): void {
    this.projetService.getAllProjets().subscribe( resp => {
      this.listProjet = resp;
      //  console.log( this.listProjet );
    } );
  }

}
