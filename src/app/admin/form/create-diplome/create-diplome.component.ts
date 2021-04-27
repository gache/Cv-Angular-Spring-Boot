import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diplome } from '../../../entities/diplome';
import { DiplomesService } from '../../../services/diplomes.service';
import swal from 'sweetalert2';



@Component( {
  selector: 'app-create-diplome',
  templateUrl: './create-diplome.component.html',
  styleUrls: ['./create-diplome.component.css']
} )
export class CreateDiplomeComponent implements OnInit {

  diplome: Diplome = new Diplome();
  title: string = "Créer un Dîplome";
<<<<<<< HEAD
=======
  erreurs: string[];
>>>>>>> ferick

  constructor( private diplomeService: DiplomesService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit (): void {
    this.diplomeById();
  }


  diplomeById (): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if ( id ) {
        this.diplomeService.getDiplome( id ).subscribe( ( diplome ) => this.diplome = diplome );
      }

    } )
  }

  public create (): void {
    this.diplomeService.create( this.diplome ).subscribe(
      respon => {
        this.router.navigate( ['/diplomesAdmin'] )
        swal.fire( 'Nouveau Dîplome', `Dîplome ${this.diplome.nomDiplome} a été créer avec satisfaction`, 'success' )
      },
      err => {
        this.erreurs = err.error.errors as string[];
        console.error( "code de l'erreur depuis le back:" + err.status );
        console.error( err.error.errors );

      }


    );
  }


  public update (): void {
    this.diplomeService.update( this.diplome ).subscribe(
      resp => {
        this.router.navigate( ['/diplomesAdmin'] );
        swal.fire( 'Dîplome actualiser', `Dîplome ${this.diplome.nomDiplome} a été actualiser avec satisfaction`, 'success' )
      },
      err => {
        this.erreurs = err.error.errors as string[];
        console.error( "code de l'erreur depuis le back:" + err.status );
        console.error( err.error.errors );

      }
    )
  }

}
