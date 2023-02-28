import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '@models/hero';

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteHeroComponent {

  @Input() hero!: Hero

  constructor() { }

  cancel() {

  }

  confirm() { }
}
