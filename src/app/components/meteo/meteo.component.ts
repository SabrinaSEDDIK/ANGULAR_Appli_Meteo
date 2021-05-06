import {Component, Input, OnInit} from '@angular/core';
import {MeteoApiService} from '../../services/meteo-api.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  //@Input()
  meteo = null;

  icons = {
    '01d': 'bigicon fas fa-sun',
    '02d': 'bigicon fas fa-cloud-sun',
    '03d': 'bigicon fas fa-cloud',
    '04d': 'bigicon fas fa-cloud',
    '09d': 'bigicon fas fa-cloud-showers-heavy',
    '10d': 'bigicon fas fa-cloud-rain',
    '11d': 'bigicon fas fa-bolt',
    '13d': 'bigicon fas fa-snowflake',
    '50d': 'bigicon fas fa-smog',
    '01n': 'bigicon fas fa-sun',
    '02n': 'bigicon fas fa-cloud-sun',
    '03n': 'bigicon fas fa-cloud',
    '04n': 'bigicon fas fa-cloud',
    '09n': 'bigicon fas fa-cloud-showers-heavy',
    '10n': 'bigicon fas fa-cloud-rain',
    '11n': 'bigicon fas fa-bolt',
    '13n': 'bigicon fas fa-snowflake',
    '50n': 'bigicon fas fa-smog',
  };

  constructor(private meteoApiService: MeteoApiService) { }

  ngOnInit(): void {
    this.meteoApiService.meteoSubject.subscribe(
      data => { this.meteo = data; }
    )
  }

}
