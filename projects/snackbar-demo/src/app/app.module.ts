import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PprSnackbarModule } from 'snackbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PprSnackbarModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
