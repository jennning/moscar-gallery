import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LocationComponent {
  @HostBinding('class')
  get class() {
    return 'location';
  }
}
