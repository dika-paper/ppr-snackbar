import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { PprSnackbarType } from './snackbar.component';

@Component({
  selector: 'ppr-snackbar-container',
  templateUrl: './snackbar-container.component.html',
  styleUrls: ['./snackbar-container.component.scss']
})
export class PprSnackbarContainerComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData,
    private ref: MatSnackBarRef<PprSnackbarContainerComponent>
  ) {}

  handleDismiss() {
    this.ref.dismiss();
  }
}

interface SnackbarData {
  title: string;
  message: string;
  type: PprSnackbarType;
}
