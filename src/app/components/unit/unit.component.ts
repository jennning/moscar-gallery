import { Component } from '@angular/core';

const unitConceptImages = (id: string, descriptions: string[]) =>
  [...Array(4).keys()].map(k => ({
    src: `assets/images/units/concepts/type-${id}-${k + 1}.jpg`,
    description: descriptions[k]
  }));

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {
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
}
