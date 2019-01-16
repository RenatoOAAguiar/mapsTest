import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import {SlideshowModule} from 'ng-simple-slideshow';
import { MapsDirectionRoutingModule } from './mapsdirection-routing.module';
import { MapsdirectionComponent } from './mapsdirection.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MapsDirectionRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA0lI7vFzJgmVqSs2BYdnHtwW9bOJOwrtI',
            libraries: ['geometry', 'places']
        }),
        AgmDirectionModule,
        SlideshowModule,
    ],
    declarations: [MapsdirectionComponent],
    providers: []
})
export class MapsDirectionModule {}
