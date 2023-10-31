import { Component } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontClean';
  authenticated: boolean = false;

  constructor(private http: HttpClientService) {}

  ngOnInit(): void {
    this.http.getCsrf();
  }

  onSignedIn(): void {
    this.authenticated = true;
  }
}
