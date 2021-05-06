import { Component } from '@angular/core';
import {Meteo} from './models/meteo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meteo';
  meteo: Meteo;

  setMeteo(meteo: Meteo): void {
    this.meteo = meteo;
    console.log('Parent:', meteo);
  }
}
