import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PprSnackbarService } from './snackbar.service';
import { PprSnackbarComponent } from './snackbar.component';
import { PprSnackbarContainerComponent } from './snackbar-container.component';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  declarations: [PprSnackbarComponent, PprSnackbarContainerComponent],
  exports: [PprSnackbarComponent],
  providers: [PprSnackbarService],
})
export class PprSnackbarModule {}
