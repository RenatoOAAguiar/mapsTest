import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsdirectionComponent } from './mapsdirection.component';

const routes: Routes = [
    {
        path: '',
        component: MapsdirectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapsDirectionRoutingModule { }
