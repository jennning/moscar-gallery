import { state, style, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';
import { delay, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { ANIM_STATE, GalleryImage } from 'src/app/types';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('photoTransition', [
      state(
        ANIM_STATE.START,
        style({
          opacity: 0
        })
      ),
      state(
        ANIM_STATE.IDLE,
        style({
          opacity: 1
        })
      )
    ]),
    trigger('labelTransition', [
      state(
        ANIM_STATE.START,
        style({
          clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
        })
      ),
      state(
        ANIM_STATE.IDLE,
        style({
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        })
      )
    ])
  ]
})
export class PhotoComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  get class() {
    return 'photo';
  }

  private destroyed$ = new Subject<void>();
  private setImage$ = new Subject<GalleryImage>();
  @Input()
  set image(image: GalleryImage) {
    this.setImage$.next(image);
  }

  activeImage: GalleryImage = null;
  photoTransitionState: ANIM_STATE = ANIM_STATE.IDLE;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setImage$
      .pipe(
        throttleTime(600),
        tap(() => (this.photoTransitionState = ANIM_STATE.START)),
        tap(() => this.cd.detectChanges()),
        delay(300),
        tap(image => (this.activeImage = image)),
        tap(() => this.cd.detectChanges()),
        delay(300),
        tap(() => (this.photoTransitionState = ANIM_STATE.IDLE)),
        tap(() => this.cd.detectChanges()),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
