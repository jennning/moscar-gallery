import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ConceptComponent } from './components/concept/concept.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PhotoComponent } from './components/photo/photo.component';
import { LocationComponent } from './components/location/location.component';
import { PlansComponent } from './components/plans/plans.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { FooterComponent } from './components/footer/footer.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CreditComponent } from './components/credit/credit.component';
import { FacilityComponent } from './components/facility/facility.component';
import { UnitComponent } from './components/unit/unit.component';
import { MasterPlanComponent } from './components/master-plan/master-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ConceptComponent,
    GalleryComponent,
    PhotoComponent,
    LocationComponent,
    PlansComponent,
    DeveloperComponent,
    FooterComponent,
    AwardsComponent,
    ContactsComponent,
    CreditComponent,
    FacilityComponent,
    UnitComponent,
    MasterPlanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScullyLibModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
