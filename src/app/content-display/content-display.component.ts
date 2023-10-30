import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientService } from '../http-client.service';

import { Content } from '../content';
@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class ContentDisplayComponent {
  title = 'Hello';
  messages: string[] = [];

  constructor(private http: HttpClientService) {}

  ngOnInit(): void {
    this.http
      .get('/messages')
      .subscribe(
        (data: Content[]) =>
          (this.messages = data.map((content) => content.message))
      );
  }
}
