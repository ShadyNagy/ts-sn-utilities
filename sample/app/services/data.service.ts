import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';
import { DebouncerHelperService } from './debouncer-helper.service';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient, private debouncerHelperService: DebouncerHelperService) {}

  private filterBy(value: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse> (`https://api.jikan.moe/v3/search/anime?q=${value}`);
  }

  getFilteredByCode(code: string): Observable<ApiResponse> {
    return this.debouncerHelperService.debouncerOnly<string, ApiResponse>(1000, code, (request) => this.filterBy(request));
  }
}
