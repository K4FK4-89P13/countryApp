import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];

  searchByRegion(region: any): void {
    this.isLoading = true;
    const selectedRegion = region.target.value;
    this.countriesService.searchRegion(selectedRegion)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }
}
