import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlansComponent {
  @HostBinding('class')
  get class() {
    return 'plans';
  }

  facilities = [
    'The Piazza',
    'Blooming Garden',
    'BBQ Pavilion',
    'Yoga / Tai Chi Deck',
    'Multi Purpose Hall',
    'Pre-function Area',
    'Table Tennis Room',
    'Gym Room',
    'Water Features',
    'Honeycomb Playground',
    'The Forest',
    'Reﬂexology Path',
    'Outdoor Gym',
    'Oscar Stage',
    'Amphitheatre',
    'The Stream',
    'The Island',
    'Children Pool',
    '50m Olympic-length Pool',
    'Sunken Sun Lounger',
    'Sunset Deck',
    'Leisure Pool',
    'Jacuzzi',
    'Jogging Track',
    '100m Starlight Walk',
    'Co-working Space / Reading Room',
    'Meeting Rooms',
    'The Gardening',
    'Community Farming',
    'Community Hangout Deck',
    'Children Play Room',
    'Games Room',
    'KTV Room',
    'Gourmet Kitchen',
    'Gourmet Lounge'
  ];

  units = [
    {
      id: 'A',
      size: '708 sf.',
      bedrooms: 2,
      bathrooms: 2,
      width: 7550,
      height: 10700
    },
    {
      id: 'B',
      size: '895 sf.',
      bedrooms: 3,
      bathrooms: 2,
      width: 9450,
      height: 10700
    },
    {
      id: 'C',
      size: '1096 sf.',
      bedrooms: 4,
      bathrooms: 2,
      width: 11645,
      height: 10700,
      exclusive: 'South Tower only'
    },
    {
      id: 'D',
      size: '1198 sf.',
      dualKey: true,
      bedrooms: 4,
      bathrooms: 3,
      width: 13860,
      height: 10700,
      breakable: true,
      exclusive: 'North Tower only'
    }
  ];

  masterLabels = [
    {
      id: 'A',
      color: '#9bcee6'
    },
    {
      id: 'B',
      color: '#f7cf98'
    },
    {
      id: 'C',
      color: '#deb8d3'
    },
    {
      id: 'D',
      color: '#b9d7b9'
    }
  ];
}
