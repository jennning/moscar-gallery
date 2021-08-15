import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AwardsComponent {
  @HostBinding('class')
  get class() {
    return 'awards';
  }

  awards = [
    {
      src: 'award-best-mass-market-winner.png',
      name: 'PropertyGuru Asia Property Award 2020',
      category: 'Best Mass Market Apartment Development'
    },
    {
      src: 'award-skyline-excellence.png',
      name: 'StarProperty Award 2020',
      category: 'The Skyline Award (Excellence)'
    }
  ];
}
