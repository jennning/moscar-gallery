import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreditComponent {
  @HostBinding('class')
  get class() {
    return 'credit';
  }

  links = [
    {
      icon: 'github',
      url: 'https://github.com/jennning'
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com/J3nnning'
    },
    {
      icon: 'codepen',
      url: 'https://codepen.io/jenning'
    },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/jenning-ho/'
    }
  ];
}
