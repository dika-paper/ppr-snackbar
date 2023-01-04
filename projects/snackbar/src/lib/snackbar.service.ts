import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PprSnackbarBase } from './snackbar-base.component';
import { PprSnackbarType } from './snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class PprSnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackbar({
    title,
    message,
    type,
    duration,
  }: {
    title: string;
    message: string;
    type: PprSnackbarType;
    duration?: number;
  }) {
    this._snackBar.openFromComponent(PprSnackbarBase, {
      duration: duration || 8000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      data: {
        title,
        message,
        type,
      },
    });
  }
}
