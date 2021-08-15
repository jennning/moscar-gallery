import {
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  @HostBinding('class')
  get class() {
    return 'hero';
  }

  @ViewChild('imageContainer')
  imageContainer: ElementRef;

  title = 'JEWEL AMONGST THE STARS'.split(' ').map(x => [...x]);
}
