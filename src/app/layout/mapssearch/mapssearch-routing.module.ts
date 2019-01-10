import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsSearchComponent } from './mapssearch.component';

const routes: Routes = [
    {
        path: '',
        component: MapsSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapsSearchRoutingModule { }
