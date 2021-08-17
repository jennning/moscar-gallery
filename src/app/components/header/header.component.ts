import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ANCHORS } from 'src/app/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @HostBinding('class')
  get class() {
    return 'header';
  }

  @Input()
  isDisabled = false;

  @Input()
  isFolded = false;

  @Output()
  onGoTo = new EventEmitter<ANCHORS>();

  links = ['concept', 'features', 'developer'];

  goTo(e: Event, key: ANCHORS) {
    e.preventDefault();
    (document.activeElement as any).blur();
    this.onGoTo.emit(key);
  }
}
