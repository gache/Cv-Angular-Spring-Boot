import { Component, OnInit } from '@angular/core';
import { DiplomesService } from '../../services/diplomes.service';
import { IDiplome } from '../../entities/diplome';

@Component( {
  selector: 'app-diplomes',
  templateUrl: './diplomes.component.html',
  styleUrls: ['./diplomes.component.css']
} )
export class DiplomesComponent implements OnInit {

  listDiplomes: IDiplome[];

  constructor( private diplomeService: DiplomesService ) { }

  ngOnInit (): void {
    this.diplomeService.getAllDiplome().subscribe( resp => {
      this.listDiplomes = resp;
      // console.log( this.listDiplomes );
    } );
  }

}
