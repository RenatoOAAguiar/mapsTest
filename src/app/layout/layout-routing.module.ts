import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'principal', pathMatch: 'prefix' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule'},
            { path: 'search', loadChildren: './mapssearch/mapssearch.module#MapsSearchModule'},
            //{ path: 'principal', loadChildren: './principal/principal.module#PrincipalModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
