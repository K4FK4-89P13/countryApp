import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, delay, map, Observable, of } from "rxjs";

import { Country } from "../interfaces/country.interface";

@Injectable({
    providedIn: 'root'
})

export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient){}

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.http.get<Country[]>(url)
            .pipe(
                catchError( () => of([]) ),
                delay(1000)
            )
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
            .pipe(
                map( countries => countries.length > 0 ? countries[0] : null ),
                catchError( () => of(null) )
            )
    }

    searchCapital(name: string): Observable<Country[]> {
        return this.getCountriesRequest(`${this.apiUrl}/capital/${name}`);
    }

    searchCountry(term: string): Observable<Country[]> {
        return this.getCountriesRequest(`${this.apiUrl}/name/${term}`);
    }
    
    searchRegion(region: string): Observable<Country[]> {
        return this.getCountriesRequest(`${this.apiUrl}/region/${region}`);
    }
}