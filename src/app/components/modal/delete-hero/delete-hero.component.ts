import { ChangeDetectionStrategy, Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '@models/hero';

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteHeroComponent {

  hero!: Hero

  constructor(public dialogRef: MatDialogRef<DeleteHeroComponent>, @Inject(MAT_DIALOG_DATA) public data: Hero) { }

  cancel() {
    this.dialogRef.close(false)
  }

  confirm() {
    this.dialogRef.close(true)
  }
}
