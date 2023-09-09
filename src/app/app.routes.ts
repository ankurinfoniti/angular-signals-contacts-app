import { Routes } from '@angular/router';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContactsListComponent,
  },
  {
    path: 'add',
    component: AddContactComponent,
  },
];
