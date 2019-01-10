import { MapsRoutingModule } from './maps-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MapsComponent } from './maps.component';
import { MapsService } from './maps.service';
import { AgmCoreModule } from '@agm/core';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MapsRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBeu0Mx6eIm0nii6bZw4ZgiipYCtPwywpE'
        }),
        SlideshowModule,
    ],
    declarations: [MapsComponent],
    providers: [
        MapsService
    ]
})
export class MapsModule {}
