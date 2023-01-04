# Snackbar

## How To Install
`npm i @paper-fe/ppr-snackbar`

## How To Use

```
// in your module
...
import { PprSnackbarModule } from  '@paper-fe/ppr-snackbar';
...

@NgModule({
    imports: [
        ...
        PprSnackbarModule,
        ...
    ],
    ...
})
export class MyModule {}

-------------------------------------
    
// in your component
...
import { PprSnackbarService } from  '@paper-fe/ppr-snackbar';
...

@Component({
    ...
})
export class MyComponent {
    constructor(
        ...
        private pprSnackbar: PprSnackbarService,
        ...
    ) {}
    
    openSnackBar() {
        this.pprSnackbar.openSnackbar({
            message:  'Callback URL telah tersimpan.',
            title:  'Berhasil',    
            type:  'info', // 'info' | 'warning' | 'danger'.
            duration: 7000 // additional duration (ms). default is 8000.
        });
    }
}
```
