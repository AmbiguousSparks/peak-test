import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeakService {

  private baseUrl: string = environment.apiUrl;

  private static options = {
    responseType: 'text' as 'json'
  }


  constructor(private httpClient: HttpClient) { }

  save(register: Register): Observable<any> {

    return this.httpClient.post<any>(`${this.baseUrl}/api/Peak`, register, PeakService.options);
  }

  get(numberToSearch: number): Observable<string> {
    return this.httpClient.get<string>(`${this.baseUrl}/api/Peak/${numberToSearch}`, PeakService.options);
  }

}
