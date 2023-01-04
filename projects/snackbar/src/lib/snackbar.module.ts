import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PprSnackbarComponent } from './snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PprSnackbarService } from './snackbar.service';
import { PprSnackbarBase } from './snackbar-base.component';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  declarations: [PprSnackbarComponent, PprSnackbarBase],
  exports: [PprSnackbarComponent],
  providers: [PprSnackbarService],
})
export class PprSnackbarModule {}
