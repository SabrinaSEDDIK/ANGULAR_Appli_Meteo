import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MeteoApiService} from '../../services/meteo-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  city: string;
  @Output() meteoData = new EventEmitter();

  constructor(private meteoApiService: MeteoApiService) { }

  ngOnInit(): void {
  }

  searchCity(city: string): void {
    console.log(city);
    this.meteoApiService.getCurrentMeteo(city).subscribe(
      (data) => {
        console.log('Enfant:', data);
        this.meteoData.emit(data);
        this.city = '';
      }, (error) => {
        console.log('Error:' + error);
        this.meteoData.emit(null);
      }
    );
  }
}
