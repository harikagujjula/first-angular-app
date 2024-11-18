import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() id!: string;
  @Input() avatar!: string;
  // Setting the Name as Required so that if name is missing for any component,
  // an error is shown at a prior stage.
  @Input({ required: true}) name!: string;
  // @Output() select = new EventEmitter();
  select = output<string>();

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
