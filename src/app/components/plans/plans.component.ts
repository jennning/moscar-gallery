import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

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

const unitConceptImages = (id: string, descriptions: string[]) =>
  [...Array(4).keys()].map(k => ({
    src: `assets/images/units/concepts/type-${id}-${k + 1}.jpg`,
    description: descriptions[k]
  }));

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
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

  facilityPreviews = facilityPreviews;

  units = [
    {
      id: 'A',
      size: '708 sf.',
      bedrooms: 2,
      bathrooms: 2,
      width: 7550,
      height: 10700,
      concepts: unitConceptImages('a', [
        'Living area',
        'Dining area',
        'Master bedroom',
        'Bathroom'
      ])
    },
    {
      id: 'B',
      size: '895 sf.',
      bedrooms: 3,
      bathrooms: 2,
      width: 9450,
      height: 10700,
      concepts: unitConceptImages('b', [
        'Dining area',
        'Kitchen area',
        'Master bedroom',
        'Master bathroom'
      ])
    },
    {
      id: 'C',
      size: '1096 sf.',
      bedrooms: 4,
      bathrooms: 2,
      width: 11645,
      height: 10700,
      exclusive: 'South Tower only',
      concepts: unitConceptImages('c', [
        'Living & dining area',
        'Kitchen area',
        'Master bedroom',
        'Study room'
      ])
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
      exclusive: 'North Tower only',
      concepts: unitConceptImages('d', [
        'Living & dining area',
        'Master bedroom',
        'Second bedroom',
        'Studio unit'
      ])
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
