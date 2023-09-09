import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  contactsService = inject(ContactsService);
  contacts = this.contactsService.contacts;

  deleteContact(email: string) {
    this.contactsService.deleteContact(email);
  }
}
