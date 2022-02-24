import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private BASE_URL: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.BASE_URL}/name/${term}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.BASE_URL}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }
}
