import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { MapsComponent } from './maps/maps.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    declarations: [LayoutComponent, HeaderComponent, BottomComponent, PrincipalComponent]
})
export class LayoutModule {}
