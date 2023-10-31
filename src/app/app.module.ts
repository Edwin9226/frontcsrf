import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContentInputComponent } from './content-input/content-input.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContentDisplayComponent,
    HttpClientModule,
    LoginFormComponent,
    ContentInputComponent,
    AppRoutingModule,
    ToolbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
