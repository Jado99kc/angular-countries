import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent implements OnInit {
  country!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.getCountry(id)),
        tap(console.log)
      )
      .subscribe({
        next: (countries) => {
          this.country = countries[0];
        },
      });
    // this.activatedRoute.params.subscribe({
    //   next: ({ id }) => {
    //     this.countriesService.getCountry(id).subscribe({
    //       next: (countries) => {
    //         console.log(countries[0]);
    //       },
    //     });
    //   },
    // });
  }
}
