import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactsComponent {
  @HostBinding('class')
  get class() {
    return 'contacts';
  }
}
