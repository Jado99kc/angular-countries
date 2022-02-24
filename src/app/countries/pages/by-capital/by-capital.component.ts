import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  constructor(private countriesService: CountriesService) {}

  term: string = '';
  notFound: boolean = false;
  countries: Country[] = [];

  search(term: string) {
    this.term = term;
    this.notFound = false;
    this.countriesService.searchByCapital(term).subscribe({
      next: (countries) => (this.countries = countries),
      error: (e) => {
        this.notFound = true;
        this.countries = [];
      },
    });
  }

  getSuggestions(term: string) {
    console.log(term);
  }
}
