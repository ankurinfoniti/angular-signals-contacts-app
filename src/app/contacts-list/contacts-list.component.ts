import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  contactsService = inject(ContactsService);
  contacts = this.contactsService.contacts;
}
