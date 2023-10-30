import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  get(url: string): any {
    return this.http.get('http://localhost:4000' + url, {
      withCredentials: true,
    });
  }

  post(url: string, data: any, options: { withCredentials?: boolean }): any {
    return this.post('http://localhost:4000' + url, data, {
      withCredentials: true,
    });
  }
}
