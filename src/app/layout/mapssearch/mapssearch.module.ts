import { MapsSearchRoutingModule } from './mapssearch-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MapsSearchComponent } from './mapssearch.component';
import { MapsSearchService } from './mapssearch.service';
import { AgmCoreModule } from '@agm/core';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MapsSearchRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA0lI7vFzJgmVqSs2BYdnHtwW9bOJOwrtI',
            libraries: ['geometry', 'places']
        }),
        SlideshowModule,
    ],
    declarations: [MapsSearchComponent],
    providers: [
        MapsSearchService
    ]
})
export class MapsSearchModule {}
