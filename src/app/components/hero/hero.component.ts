import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ANCHORS } from 'src/app/types';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @HostBinding('class')
  get class() {
    return 'hero';
  }

  @ViewChild('imageContainer')
  imageContainer: ElementRef;

  title = 'JEWEL AMONGST THE STARS'.split(' ').map(x => [...x]);

  heroImages = ['facade', 'tower', 'background'];

  @Output()
  onGoDown = new EventEmitter<ANCHORS>();

  goDown(e: Event) {
    e.preventDefault();
    (document.activeElement as any).blur();
    this.onGoDown.emit(ANCHORS.CONCEPT);
  }
}
