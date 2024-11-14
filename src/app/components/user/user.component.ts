import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // Defining selectedUser as a signal(supported with Angular 16+).
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // Use computed() to get a value based on signal, so that the value is
  //  computed only if the selectedUser signal changes.
  imagePath = computed(() => 'users/' + this.selectedUser().avatar)

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // Signal should be set by using set().
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
