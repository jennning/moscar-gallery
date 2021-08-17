import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  first,
  map,
  takeUntil,
  tap,
  throttleTime
} from 'rxjs/operators';
import { ANCHORS, GalleryImage } from 'src/app/types';
import { environment } from 'src/environments/environment';
import { HeroComponent } from './components/hero/hero.component';

interface AppComponentState {
  heroScrollPos: number;
  activeGalleryImage: GalleryImage;
  isScrolling: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostListener('window:scroll')
  onScroll() {
    this.updateHeroScrollProgress();
  }

  @HostBinding('style.--hero-progress')
  get progress() {
    return isNaN(this.state.heroScrollPos) ? 0 : this.state.heroScrollPos;
  }

  @ViewChild('heroCmp', { static: true })
  hero: HeroComponent;

  @ViewChild('concept')
  concept: ElementRef;
  @ViewChild('features')
  features: ElementRef;
  @ViewChild('developer')
  developer: ElementRef;

  private readonly destroyed$ = new Subject();

  private _heroScrollProgress$ = new Subject<number>();
  private scrollTo$ = new Subject();

  private stateMonitor$ = new Subject<Partial<AppComponentState>>();
  private state$ = new BehaviorSubject<AppComponentState>({
    heroScrollPos: 0,
    activeGalleryImage: null,
    isScrolling: false
  });
  set state(next: Partial<AppComponentState>) {
    this.stateMonitor$.next(next);
    this.state$.next({
      ...this.state$.value,
      ...next
    });
    this.cd.detectChanges();
  }
  get state() {
    return this.state$.value;
  }

  get activeGalleryImage$() {
    return this.state$.pipe(map(x => x.activeGalleryImage));
  }

  get isScrolling$() {
    return this.state$.pipe(map(x => x.isScrolling));
  }

  get isOverATF$() {
    return this.state$.pipe(map(x => x.heroScrollPos > 0.2));
  }

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.stateMonitor$
      .pipe(
        throttleTime(400),
        tap(state => !environment.production && console.log('state: ', state)),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.watchHeroScrollProgress();
    this.watchScrollTo();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  ngAfterViewInit() {
    this.zone.onStable
      .pipe(
        first(),
        tap(() => this.updateHeroScrollProgress())
      )
      .subscribe();
  }

  private watchScrollTo() {
    const durationRange = {
      max: 3000,
      min: 600
    };
    const steps = 12;
    const transitionTiming = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    this.scrollTo$
      .pipe(
        tap(() => (this.state = { isScrolling: true })),
        tap((el: HTMLElement) => {
          const target = el.getBoundingClientRect().top + window.scrollY;
          const start = window.pageYOffset;
          const dist = target - start;
          const duration = Math.max(
            Math.min(
              (Math.abs(dist) / document.body.offsetHeight) * durationRange.max,
              durationRange.max
            ),
            durationRange.min
          );
          let current = 0;

          const animateScroll = () => {
            if (current >= duration) {
              this.state = { isScrolling: false };
              return;
            }

            current += steps;
            const pos = transitionTiming(current, start, dist, duration);

            window.scrollTo(0, pos);

            requestAnimationFrame(animateScroll);
          };

          animateScroll();
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  private watchHeroScrollProgress() {
    this._heroScrollProgress$
      .pipe(
        filter(() => this.hero?.imageContainer.nativeElement),
        map(pos => pos / this.hero.imageContainer.nativeElement.offsetHeight),
        map(pos => Math.min(pos, 1)),
        tap(heroScrollPos =>
          requestAnimationFrame(() => (this.state = { heroScrollPos }))
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  private updateHeroScrollProgress() {
    this._heroScrollProgress$.next(window.scrollY);
  }

  setGalleryImage(activeGalleryImage: GalleryImage) {
    this.state = { activeGalleryImage };
  }

  scrollTo(key: ANCHORS) {
    const el: HTMLElement = this[key]?.nativeElement;

    if (!el) {
      return;
    }

    this.scrollTo$.next(el);
  }
}
