import { Component, OnInit } from '@angular/core';

import { DiplomesService } from 'src/app/services/diplomes.service';
import { IDiplome } from '../../entities/diplome';

@Component( {
  selector: 'app-diplome-admin',
  templateUrl: './diplome-admin.component.html',
  styleUrls: ['./diplome-admin.component.css']
} )
export class DiplomeAdminComponent implements OnInit {

  listDiplomes: IDiplome[];

  constructor( private diplomeService: DiplomesService ) {
  }


  ngOnInit (): void {
    this.diplomeService.getAllDiplome().subscribe( resp => {
      this.listDiplomes = resp;
      // console.log( this.listDiplomes );
    } );
  }

}
