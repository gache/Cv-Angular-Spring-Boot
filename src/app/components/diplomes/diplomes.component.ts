import { Component, OnInit } from '@angular/core';
import { DiplomeInterface } from 'src/app/entities/diplome';
import { DiplomesService } from '../../services/diplomes.service';

@Component( {
  selector: 'app-diplomes',
  templateUrl: './diplomes.component.html',
  styleUrls: ['./diplomes.component.css']
} )
export class DiplomesComponent implements OnInit {

  listDiplomes: Array<DiplomeInterface>;

  constructor( private diplomeService: DiplomesService ) { }

  ngOnInit (): void {
    this.diplomeService.getAllDiplome().subscribe( resp => {
      this.listDiplomes = resp;
      console.log( this.listDiplomes );
    } );
  }

}
