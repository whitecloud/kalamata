import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get(url, options?) {
    return new Promise(resolve => {
      const $http = this.http.get(url, options).subscribe(response => {
        $http.unsubscribe();
        resolve(response);
      });
    })
  }

}
