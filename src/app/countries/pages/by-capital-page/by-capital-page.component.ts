import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService){}

  searchByCapital(term: string):void {
    this.isLoading = true;


    console.log({term});
    this.countriesService.searchCapital(term)
      .subscribe(res => {
        this.countries = res;
        this.isLoading = false;
      });
  }
}
