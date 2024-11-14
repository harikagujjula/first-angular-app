import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() avatar!: string;
  // Setting the Name as Required so that if name is missing for any component,
  // an error is shown at a prior stage.
  @Input({ required: true}) name!: string;

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
  }
}
