import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Meteo} from '../models/meteo';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoApiService {

  constructor(private http: HttpClient) { }

  meteoSubject: Subject<Meteo> = new Subject<Meteo>();

  getCurrentMeteo(city): Observable<Meteo> {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},FR&units=metric&lang=fr&appid=c93d76be506aeacd7d011be17bc6a3a8`;
    const obs = this.http.get<Meteo>(URL);
    obs.subscribe((data) => {
      this.meteoSubject.next(data);
    });
    return obs;
  }

}
