import { Component, OnDestroy } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'CvAngularSpringBoot';
  souscription: Subscription;

  constructor(config: NgsRevealConfig) {
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config.delay = 2000;
    config.scale = 0.9;
  }

  ngOnDestroy(): void {
    this.souscription.unsubscribe();
  }



}
