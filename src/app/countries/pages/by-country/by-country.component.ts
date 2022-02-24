import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent implements OnInit {
  term: string = '';
  notFound: boolean = false;
  countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.term = term;
    this.notFound = false;
    this.countriesService.searchCountry(term).subscribe({
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
