import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { PprSnackbarType } from './snackbar.component';

@Component({
  selector: 'ppr-snackbar-base',
  template: `
    <ppr-snackbar
      [type]="data?.type"
      [titleText]="data?.title"
      [messageText]="data?.message"
      (dismissEvent)="handleDismiss()"
    ></ppr-snackbar>
  `,
})
export class PprSnackbarBase {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData,
    private ref: MatSnackBarRef<PprSnackbarBase>
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
