import { Component } from '@angular/core';
import { PprSnackbarService } from '@paper-fe/snackbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'snackbar-demo';

  constructor(private snackbar: PprSnackbarService) {}

  openInfoSnackBar() {
    this.snackbar.openSnackbar({
      message: 'Callback URL telah tersimpan.',
      title: 'Berhasil',
      type: 'info',
      duration: 60000
    });
  }

  openWarningSnackBar() {
    this.snackbar.openSnackbar({
      message: 'Callback URL telah tersimpan.',
      title: 'Perhatian',
      type: 'warning',
      duration: 60000
    });
  }

  openDangerSnackBar() {
    this.snackbar.openSnackbar({
      message: 'Callback URL gagal tersimpan.',
      title: 'Error',
      type: 'danger',
      duration: 60000
    });
  }
}
