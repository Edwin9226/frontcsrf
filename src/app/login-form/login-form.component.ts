import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
  ],
})
export class LoginFormComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  @Output() onLoginEvent = new EventEmitter();

  constructor(private http: HttpClient) {}
  onSubmit(): void {
    this.http
      .post('http://localhost:4000/signIn', this.loginForm.value)
      .subscribe((data: any) => this.onLoginEvent.emit());
  }
}