import { Component } from '@angular/core';

const facilityPreviewData = [
  {
    id: '19',
    name: '50m Olympic-length Pool',
    img: '12',
    x: 27,
    y: 57.2
  },
  {
    id: '8',
    name: 'Gym Room',
    img: '10',
    x: 33.4,
    y: 21.4
  },
  {
    id: '25',
    name: '100m Starlight Walk',
    img: '14',
    x: 40.8,
    y: 63.5
  },
  {
    id: '16',
    name: 'The Stream',
    img: '15',
    x: 45.2,
    y: 48.8
  },
  {
    id: '3',
    name: 'BBQ Pavilion',
    img: '11',
    x: 40.8,
    y: 1.6
  },
  {
    id: '31',
    name: 'Children Play Room',
    img: '4',
    x: 39.5,
    y: 86.6
  },
  {
    id: '5',
    name: 'Multi Purpose Hall',
    img: '16',
    x: 71.4,
    y: 6.1
  },
  {
    id: '32',
    name: 'Games Room',
    img: '6',
    x: 23.6,
    y: 87.4
  },
  {
    id: '26',
    name: 'Co-working Space',
    img: '5',
    x: 66,
    y: 68
  }
];

const facilityPreviews = facilityPreviewData.map(x => ({
  ...x,
  src: `assets/images/gallery/m-oscar-${x.img}.jpg`
}));

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent {
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

  facilityPreviews = facilityPreviews;
}
