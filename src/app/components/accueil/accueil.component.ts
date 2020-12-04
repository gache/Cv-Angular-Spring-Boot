import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component( {
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
} )
export class AccueilComponent implements OnInit {

  @Output() scrollToParent: EventEmitter<string> = new EventEmitter();
  constructor() {
    this.scrollToParent = new EventEmitter();
  }

  ngOnInit (): void {
  }

  scrollTo ( id ) {
    this.scrollToParent.emit( id );
    // return false;
  }

}
