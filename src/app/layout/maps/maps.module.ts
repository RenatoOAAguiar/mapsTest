import { MapsRoutingModule } from './maps-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MapsComponent } from './maps.component';
import { MapsService } from './maps.service';
import { AgmCoreModule } from '@agm/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MapsRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBeu0Mx6eIm0nii6bZw4ZgiipYCtPwywpE',
            libraries: ['geometry', 'places']
        }),
        SlideshowModule,
    ],
    declarations: [MapsComponent, FormComponent],
    providers: [
        MapsService
    ]
})
export class MapsModule {}
