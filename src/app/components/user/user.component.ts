import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  avatar = input<string>();
  // Defining name Input signal as required.
  name = input.required<string>();

  imagePath = computed(() => {
    return 'users/' + this.avatar()
  });

  onSelectUser() {
  }
}
