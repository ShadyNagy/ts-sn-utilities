import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';
import { DebouncerHelper } from 'projects/ts-sn-utilities';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  debouncerHelper = new DebouncerHelper();

  constructor(private http: HttpClient) {}

  private filterBy(value: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse> (`https://api.jikan.moe/v3/search/anime?q=${value}`);
  }

  getFilteredByCode(code: string): Observable<ApiResponse> {
    this.debouncerHelper.resetData();
    return this.debouncerHelper.debouncerOnly<string, ApiResponse>(1000, code, (request) => this.filterBy(request));
  }
}

