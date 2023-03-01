import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

  constructor(private snakbar: MatSnackBar) { }

  handleError(error: unknown): void {
    if (error instanceof Error) {
      console.log(error)
      this.snakbar.open(
        'Error desconocido',
        'Close',
        { duration: 50 }
      )
    }
  }
}
