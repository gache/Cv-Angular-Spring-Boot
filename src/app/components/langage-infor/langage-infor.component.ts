import { Component, OnInit } from '@angular/core';
import { LangageInterface } from 'src/app/entities/langage';
import { LangageInfoService } from 'src/app/services/langageInfo.service';

@Component( {
  selector: 'app-langage-infor',
  templateUrl: './langage-infor.component.html',
  styleUrls: ['./langage-infor.component.css']
} )
export class LangageInforComponent implements OnInit {

  listLangage: Array<LangageInterface>;

  constructor( private langageService: LangageInfoService ) { }

  ngOnInit (): void {
    this.langageService.getAllLangage().subscribe( resp => {
      this.listLangage = resp;
      // console.log( this.listLangage );

    } )
  }

}
