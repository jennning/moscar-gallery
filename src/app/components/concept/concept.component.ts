import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConceptComponent {
  @HostBinding('class')
  get class() {
    return 'concept';
  }

  features = [
    {
      icon: 'field',
      name: 'Elevated living 100m above sea level'
    },
    {
      icon: 'swimming-pool',
      name: '2.7 acres facilities podium'
    },
    {
      icon: 'pinwheel',
      name: 'All units north-south orientation'
    },
    {
      icon: 'car',
      name: '2 to 4 car parks per Unit'
    }
  ];

  ideas = [
    {
      name: 'canyons',
      description:
        'Your arrival home is always ushered by stately entrance statement and lobby design, inspired by the likes of canyons carved over the millennia.'
    },
    {
      name: 'stars',
      description:
        'Not only a community of the young and rising – from the window, you can literally marvel at the brilliance of stars above and beneath your abode.'
    },
    {
      name: 'water',
      description:
        'The landscaping of common facilities and play areas are an urban rendition of nature inspired by wetlands and meandering streams.'
    }
  ];
}
