# Snackbar

## How To Install
`npm i @paper-fe/snackbar`

## How To Use

```
// in your module
...
import { PprSnackbarModule } from  '@paper-fe/snackbar';
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
import { PprSnackbarService } from  '@paper-fe/snackbar';
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
            message:  'Put your snackbar message here.',
            title:  'A Title',    
            type:  'info', // 'info' | 'warning' | 'danger'.
            duration: 7000 // additional duration (ms). default is 8000.
        });
    }
}
```
