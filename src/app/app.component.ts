import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contactsService = inject(ContactsService);

  totalContacts = this.contactsService.totalContacts;
  maxReached = this.contactsService.maxReached;

  snackbar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      if (this.maxReached()) {
        this.snackbar.open(
          "You've reached the maximum contacts allowed in this app. Please delete some to continue adding...",
          'Close'
        );
      }
    });
  }
}
