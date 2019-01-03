import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LayoutComponent, MapsComponent]
})
export class LayoutModule {}
