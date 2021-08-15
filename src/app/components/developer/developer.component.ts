import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperComponent {
  @HostBinding('class')
  get class() {
    return 'developer';
  }

  projects = [
    {
      src: 'project-m-astra.jpg',
      name: 'M Astra',
      type: '2-storey Terrace Homes',
      address: 'Salak Tinggi',
      website: 'https://m-astra.com.my/'
    },
    {
      src: 'project-m-panora.png',
      name: 'M Panora',
      type: 'Serviced Residence',
      address: 'Setapak, KL',
      website: 'https://m-panora.com.my//'
    },
    {
      src: 'project-m-senyum.jpg',
      name: 'M Senyum',
      type: 'Freehold Gated and Guarded 2-storey Super Link',
      address: 'Rawang, Selangor',
      website: 'https://www.msenyum.com.my/'
    }
  ].map(x => ({
    ...x,
    src: `assets/images/projects/${x.src}`
  }));
}
