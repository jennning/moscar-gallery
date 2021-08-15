import {
  Component,
  HostBinding,
  Output,
  ViewEncapsulation,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  OnInit,
  NgZone
} from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { first, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { randomInt } from 'src/app/functions';
import { GalleryImage } from 'src/app/types';

const imageDescriptions = [
  'Facade - day view',
  'Drop-off lobby',
  'Grand lobby',
  'Children playroom',
  'Co-working space',
  'Games room',
  'Gourmet kitchen',
  'Lift lobby',
  'KTV room',
  'Gym overlooking water',
  'BBQ pavilion',
  'Olympic length pool',
  'Facilities podium',
  'Starlight walk',
  'The Stream',
  'Multi purpose hall'
];

const imageSet = [...Array(16).keys()].map(id => ({
  name: imageDescriptions[id],
  src: `assets/images/gallery/m-oscar-${id + 1}.jpg`
}));

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class')
  get class() {
    return 'gallery';
  }

  @Output()
  activeImage = new EventEmitter<GalleryImage>();

  private destroyed$ = new Subject<void>();
  private hoveredImage$ = new Subject<GalleryImage>();
  private currentActiveIndex: number = null;

  images = [...imageSet, ...imageSet];

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.hoveredImage$
      .pipe(
        switchMap(image =>
          !!image
            ? of(image)
            : interval(6000).pipe(map(() => this.getRandomImage()))
        ),
        tap(image => this.activeImage.emit(image)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  ngAfterViewInit() {
    this.zone.onStable
      .pipe(
        first(),
        tap(() => this.activeImage.emit(this.getRandomImage())),
        tap(() => this.unsetHoverImage())
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  private getRandomImage() {
    const indexes = [...Array(imageSet.length).keys()].filter(
      x => x !== this.currentActiveIndex
    );
    this.currentActiveIndex = randomInt(0, indexes.length - 1);

    return imageSet[this.currentActiveIndex];
  }

  setHoverImage(image: GalleryImage) {
    this.hoveredImage$.next(image);
  }

  unsetHoverImage() {
    this.hoveredImage$.next(null);
  }

  index(idx: number) {
    return idx;
  }
}
