import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component( {
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
} )
export class NavBarComponent implements OnInit {
  @Output() scrollToParent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  isInImage = true;

  ngOnInit () {
    window.addEventListener( 'scroll', ( $event ) => { this.onScroll( $event ); } );
  }

  onScroll ( $event ) {
    if ( window.scrollY <= window.innerHeight ) {
      this.isInImage = true;
    } else {
      this.isInImage = false;
    }
  }


  scrollTo ( id, ev ) {
    ev.preventDefault();
    this.scrollToParent.emit( id );
  }


}
