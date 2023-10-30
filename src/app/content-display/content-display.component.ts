import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Content[]>('http://localhost:4000/messages')
      .subscribe(
        (data: Content[]) =>
          (this.messages = data.map((content) => content.message))
      );
  }
}
