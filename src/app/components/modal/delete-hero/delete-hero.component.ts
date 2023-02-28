import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteHeroComponent {

}
