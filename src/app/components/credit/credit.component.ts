import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditComponent {
  @HostBinding('class')
  get class() {
    return 'credit';
  }

  links = [
    {
      icon: 'github',
      url: 'https://github.com/jennning/moscar-gallery',
      title: "Jen Ning's Github"
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com/J3nnning',
      title: "Jen Ning's Twitter"
    },
    {
      icon: 'codepen',
      url: 'https://codepen.io/jenning',
      title: "Jen Ning's Codepen"
    },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/jenning-ho/',
      title: "Jen Ning's LinkedIn"
    }
  ];
}
