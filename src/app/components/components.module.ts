import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction' 
import { HttpModule } from '@angular/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { HeaderComponent } from './header/header.component';
// import { SocialComponent } from './social/social.component';
import { FindMapComponent } from './findMap/findMap.component';
// import { AddMapComponent } from './addMap/addMap.component';
import { FormComponent } from './form/form.component';
import { FormStepComponent } from './form/form-step.component';
// import { NavbarComponent } from './navbar/navbar.component';

import { DirectionsMapDirective } from '../directives/directions.directive';

import { RouteBoxerService } from '../services/routeboxer/routeboxer.service';
// import { LocationsService } from '../services/locations/locations.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsNHQMWps15YIRCvnsh3fAn6uj2dTYFJE',
      libraries: ['places']
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmDirectionModule,
    FontAwesomeModule
  ],
  declarations: [
    FindMapComponent,
    DirectionsMapDirective,
    FormComponent,
    FormStepComponent
  ],
  exports: [
    FindMapComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    FormComponent,
    FormStepComponent
  ],
  providers: [
    RouteBoxerService
    // LocationsService
  ]
})
export class ComponentsModule { }
