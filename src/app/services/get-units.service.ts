import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface'

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {
  readonly apiUrl = 'assets/data/units.json';

  constructor(private httpClient: HttpClient) { }

  getAllUnits(): Observable<UnitsResponse> {
    return this.httpClient.get<UnitsResponse>(this.apiUrl);


  }
}
