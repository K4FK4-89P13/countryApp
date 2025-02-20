import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor(private countriesService: CountriesService){}

  public countries: Country[] = [];

  searchByCountry(name: string) {
    this.countriesService.searchCountry(name)
      .subscribe(countries => this.countries = countries)
  }
}
