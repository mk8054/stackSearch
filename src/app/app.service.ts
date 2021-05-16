import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL: string = "https://api.stackexchange.com/2.2/";

  public searchChange = new BehaviorSubject<string>('');
  searchChangeObservable = this.searchChange.asObservable();

  constructor(
    private http: HttpClient
  ) {

  }

  doSearch(value: string): void {
    this.searchChange.next(value);
  }

  getApiUrl(url: string) {
    return this.baseURL + url;
  }

  httpRequest(url: string, params: any,) {
    let httpParams = new HttpParams();
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const element = params[key];
        httpParams.append(key, element);
      }
    }
    return this.http.get(this.getApiUrl(url), { params });
  }

}
