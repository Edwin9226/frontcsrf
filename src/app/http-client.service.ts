import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}
  csrfToken: string = '';

  get(url: string): any {
    return this.http.get('http://localhost:4000' + url, {
      withCredentials: true,
    });
  }

  post(
    url: string,
    data: any,
    options: { headers?: HttpHeaders; withCredentials?: boolean }
  ): any {
    return this.http.post('http://localhost:4000' + url, data, {
      headers: new HttpHeaders({ 'X-CSRF-TOKEN': this.csrfToken }),
      withCredentials: true,
    });
  }

  getCsrf(): void {
    this.http
      .get('http://localhost:4000/csrf/token')
      .subscribe((data: any) => (this.csrfToken = data.token));
  }
}
